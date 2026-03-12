# FlowTech 2.0 — Makefile
# Usage: make <target> [V=c1]  (V defaults to all variants)
#
# Examples:
#   make dev              — all 6 dev servers in parallel
#   make dev V=c1         — just C1 on port 3004
#   make build V=c2       — build only C2
#   make check            — typecheck + lint everything
#   make deploy V=c1      — build + rsync C1 to server

SHELL     := bash
VARIANTS  := a b c c1 c2 c3
V         ?=

# ── Deployment config ─────────────────────────────────────────────
# Override via env or .env.deploy:
#   DEPLOY_HOST  = user@server
#   DEPLOY_PATH  = /var/www/flowtech
#   DEPLOY_KEY   = ~/.ssh/id_flowtech
-include .env.deploy
DEPLOY_HOST ?= user@your-server.com
DEPLOY_PATH ?= /var/www/flowtech
DEPLOY_KEY  ?=
SSH_OPTS    := $(if $(DEPLOY_KEY),-i $(DEPLOY_KEY),)

# ── Helpers ───────────────────────────────────────────────────────
_variants = $(if $(V),$(V),$(VARIANTS))

.PHONY: help install check typecheck lint build dev preview \
        deploy deploy-site clean distclean

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*##"}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "  Pass V=<variant> to target a single variant (e.g. make build V=c1)"
	@echo "  Variants: $(VARIANTS)"

# ── Setup ─────────────────────────────────────────────────────────
install: ## Install all dependencies
	pnpm install

# ── Checks ────────────────────────────────────────────────────────
typecheck: ## TypeScript check (all or V=x)
	@for v in $(_variants); do \
		echo ""; \
		echo "=== typecheck variant-$$v ==="; \
		pnpm --filter "variant-$$v" typecheck || exit 1; \
	done

lint: ## ESLint check (all or V=x)
	@for v in $(_variants); do \
		echo ""; \
		echo "=== lint variant-$$v ==="; \
		pnpm --filter "variant-$$v" lint || exit 1; \
	done

check: typecheck lint ## Run typecheck + lint

# ── Build ─────────────────────────────────────────────────────────
build: ## Build variants (all or V=x)
	@for v in $(_variants); do \
		echo ""; \
		echo "=== build variant-$$v ==="; \
		pnpm --filter "variant-$$v" build || exit 1; \
	done

build-site: ## Build production v1 site
	cd site && npm run build

build-everything: build build-site ## Build all variants + v1 site

# ── Dev servers ───────────────────────────────────────────────────
ifdef V
dev: ## Dev server (all or V=x). Single variant or parallel.
	@words=($(_variants)); \
	if [ "$${#words[@]}" -eq 1 ]; then \
		pnpm "dev:$$words"; \
	else \
		args=""; \
		for v in $${words[@]}; do args="$$args \"pnpm dev:$$v\""; done; \
		eval concurrently $$args; \
	fi
else
dev:
	pnpm dev:all
endif

dev-site: ## Run v1 site dev server
	cd site && npm run dev

preview: ## Preview built variants (all or V=x)
	@for v in $(_variants); do \
		pnpm --filter "variant-$$v" preview & \
	done; wait

# ── Deploy ────────────────────────────────────────────────────────
deploy: build ## Build + deploy variants to server (all or V=x)
	@if [ "$(DEPLOY_HOST)" = "user@your-server.com" ]; then \
		echo "ERROR: Set DEPLOY_HOST in .env.deploy or environment"; \
		exit 1; \
	fi
	@for v in $(_variants); do \
		echo ""; \
		echo "=== deploying variant-$$v -> $(DEPLOY_PATH)/v2/$$v/ ==="; \
		ssh $(SSH_OPTS) $(DEPLOY_HOST) "rm -rf $(DEPLOY_PATH)/v2/$$v && mkdir -p $(DEPLOY_PATH)/v2/$$v" && \
		scp -r $(SSH_OPTS) packages/variant-$$v/dist/* "$(DEPLOY_HOST):$(DEPLOY_PATH)/v2/$$v/" || exit 1; \
	done
	@echo ""; echo "Deploy complete."

deploy-site: build-site ## Build + deploy v1 site
	@if [ "$(DEPLOY_HOST)" = "user@your-server.com" ]; then \
		echo "ERROR: Set DEPLOY_HOST in .env.deploy or environment"; \
		exit 1; \
	fi
	scp -r $(SSH_OPTS) site/dist/* "$(DEPLOY_HOST):$(DEPLOY_PATH)/"

deploy-all: deploy deploy-site ## Deploy everything

# ── Clean ─────────────────────────────────────────────────────────
clean: ## Remove dist/ from all variants
	@for v in $(VARIANTS); do \
		rm -rf "packages/variant-$$v/dist"; \
	done
	rm -rf site/dist
	@echo "Cleaned all dist/ dirs."

distclean: clean ## Clean + remove node_modules
	@for v in $(VARIANTS); do \
		rm -rf "packages/variant-$$v/node_modules"; \
	done
	rm -rf node_modules packages/shared/node_modules site/node_modules
	@echo "Cleaned node_modules."
