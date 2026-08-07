# -*- coding: utf-8 -*-
"""Собирает Договор № 2026-FT-01 + Приложение №1 (ТЗ) в подписной комплект
и экспортирует его в DOCX и PDF.

Вход  — docs/dogovor-brandbook-ru.md + docs/tz-brandbook-ru.md (правим ТОЛЬКО их).
Выход — docs/podpisanie/*.md + *.docx + *.pdf (производные, руками не править).

Механика: снять внутренние символы статуса и паспорт, склеить через разрыв
страницы, задать A4 + поля + колонтитул «стр. N / всего».

    python scripts/build_signable.py
"""
import io
import os
import re
import shutil
import subprocess
import zipfile

ROOT = r"E:\Projects\007 - Ventures\V006 - FlowTech"
DOCS = os.path.join(ROOT, "docs")
OUT_DIR = os.path.join(DOCS, "podpisanie")
OUT_MD = os.path.join(OUT_DIR, "FlowTech-dogovor-2026-FT-01-i-TZ.md")

PANDOC = r"C:\Users\zd\AppData\Local\Pandoc\pandoc.exe"
SOFFICE = r"C:\Program Files\LibreOffice\program\soffice.exe"

# Символы статуса — наша внутренняя разметка. В подписываемом документе они
# читаются как черновик, а в PDF ещё и зависят от наличия emoji-шрифта.
MARKERS = ["🔴 ", "🟡 ", "🟢 ", "✅ ", "❌ ", "⚠️ ", "⚠ ",
           "🔴", "🟡", "🟢", "✅", "❌", "⚠️", "⚠"]

# разрыв страницы, который pandoc кладёт прямо в docx
PAGEBREAK = '\n```{=openxml}\n<w:p><w:r><w:br w:type="page"/></w:r></w:p>\n```\n'

A4_W, A4_H = 11906, 16838      # A4 в twips: 210 x 297 mm
MARGIN = 1134                   # 2 см

FOOTER_XML = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:p><w:pPr><w:jc w:val="center"/></w:pPr>
<w:r><w:fldChar w:fldCharType="begin"/></w:r>
<w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r>
<w:r><w:fldChar w:fldCharType="separate"/></w:r>
<w:r><w:t>1</w:t></w:r>
<w:r><w:fldChar w:fldCharType="end"/></w:r>
<w:r><w:t xml:space="preserve"> / </w:t></w:r>
<w:r><w:fldChar w:fldCharType="begin"/></w:r>
<w:r><w:instrText xml:space="preserve"> NUMPAGES </w:instrText></w:r>
<w:r><w:fldChar w:fldCharType="separate"/></w:r>
<w:r><w:t>1</w:t></w:r>
<w:r><w:fldChar w:fldCharType="end"/></w:r>
</w:p></w:ftr>"""

FOOTER_RID = "rIdFtFooter"
SECT_PR = (
    f'<w:sectPr>'
    f'<w:footerReference w:type="default" r:id="{FOOTER_RID}"/>'
    f'<w:pgSz w:w="{A4_W}" w:h="{A4_H}"/>'
    f'<w:pgMar w:top="{MARGIN}" w:right="{MARGIN}" w:bottom="{MARGIN}" '
    f'w:left="{MARGIN}" w:header="709" w:footer="709" w:gutter="0"/>'
    f'</w:sectPr>'
)


def clean(text: str) -> str:
    # паспорт (docs_passport.py) — внутренняя метаинформация, снимаем первым
    text = re.sub(r"^<!--\s*паспорт:.*?-->\s*\n+", "", text, flags=re.S)
    for m in MARKERS:
        text = text.replace(m, "")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def read(name: str) -> str:
    with io.open(os.path.join(DOCS, name), encoding="utf-8") as f:
        return f.read()


def patch_docx_a4(path: str) -> str:
    """A4 + поля + колонтитул. docx = zip, правим части напрямую.

    pandoc не пишет sectPr вовсе — его надо ВСТАВИТЬ, а не заменить.
    """
    notes = []
    with zipfile.ZipFile(path) as zin:
        items = [i.filename for i in zin.infolist()]
        data = {n: zin.read(n) for n in items}

    doc = data["word/document.xml"].decode("utf-8")
    if "<w:sectPr" in doc:
        doc = re.sub(r"<w:sectPr.*?</w:sectPr>", SECT_PR, doc, flags=re.S)
        doc = re.sub(r"<w:sectPr[^>]*/>", SECT_PR, doc)
        notes.append("sectPr заменён")
    else:
        doc = doc.replace("</w:body>", SECT_PR + "</w:body>")
        notes.append("sectPr вставлен")
    data["word/document.xml"] = doc.encode("utf-8")

    data["word/footer1.xml"] = FOOTER_XML.encode("utf-8")
    if "word/footer1.xml" not in items:
        items.append("word/footer1.xml")

    rels_name = "word/_rels/document.xml.rels"
    rels = data[rels_name].decode("utf-8")
    if FOOTER_RID not in rels:
        rel = (
            f'<Relationship Id="{FOOTER_RID}" '
            f'Type="http://schemas.openxmlformats.org/officeDocument/2006/'
            f'relationships/footer" Target="footer1.xml"/>'
        )
        data[rels_name] = rels.replace(
            "</Relationships>", rel + "</Relationships>").encode("utf-8")
        notes.append("rel добавлен")

    ct_name = "[Content_Types].xml"
    ct = data[ct_name].decode("utf-8")
    if "/word/footer1.xml" not in ct:
        ov = ('<Override PartName="/word/footer1.xml" '
              'ContentType="application/vnd.openxmlformats-officedocument.'
              'wordprocessingml.footer+xml"/>')
        data[ct_name] = ct.replace("</Types>", ov + "</Types>").encode("utf-8")
        notes.append("content-type добавлен")

    tmp = path + ".tmp"
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
        for n in items:
            zout.writestr(n, data[n])
    shutil.move(tmp, path)
    return " · ".join(notes)


def run(cmd: list) -> None:
    r = subprocess.run(cmd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if r.returncode != 0:
        print("   FAILED:", " ".join(str(c) for c in cmd))
        print("   stderr:", (r.stderr or "").strip()[:600])
        raise SystemExit(1)


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    body = clean(read("dogovor-brandbook-ru.md")) + "\n\n" + \
        PAGEBREAK + "\n" + clean(read("tz-brandbook-ru.md")) + "\n"

    with io.open(OUT_MD, "w", encoding="utf-8", newline="\n") as f:
        f.write(body)
    print("md    ->", os.path.basename(OUT_MD))

    docx = OUT_MD.replace(".md", ".docx")
    pdf = OUT_MD.replace(".md", ".pdf")

    run([PANDOC, OUT_MD, "-f", "markdown+pipe_tables+raw_attribute",
         "-o", docx, "--standalone"])
    print("docx  ->", os.path.basename(docx))
    print("A4    ->", patch_docx_a4(docx))

    run([SOFFICE, "--headless", "--norestore", "--convert-to", "pdf",
         "--outdir", OUT_DIR, docx])
    print("pdf   ->", os.path.basename(pdf))
    print("\nГотово:", OUT_DIR)


if __name__ == "__main__":
    main()
