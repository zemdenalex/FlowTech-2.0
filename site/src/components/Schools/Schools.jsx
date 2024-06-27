import React from 'react'
import Schools1 from '/assets/Schools1.png'
import Schools2 from '/assets/Schools2.png'

const Schools = () => {
  return (
    <div className='bg-main mt-10 md:mt-20'>
      {/* Schools 1 */}
      <div id="schools-1" className='md:min-h-[600px]'>
        <div className='bg-white rounded-br-3xl w-[90%] md:w-3/5'>
          <h2 className='text-main md:py-2 font-medium text-lg md:text-[40px] text-roboto mx-5 md:mx-20 py-1'>
            АДТ УЧЕБНАЯ – ШКОЛАМ, КВАНТОРИУМАМ, ЦМИТАМ
          </h2>
        </div>
        <div className='container'>
          <div className='mt-10 md:mt-20 md:grid md:grid-cols-2'>
            <div className='md:ml-20'>
              <h4 className='text-[20px] text-center'>
                Использование АДТ в школе
              </h4>
              <div className='border-[7px] border-border pl-10 rounded-2xl mt-5 py-3'>
                <ol className='list-disc text-[16px]'>
                  <li>68 академических часа </li>
                  <li>Разработана специально для образовательных учреждений </li>
                  <li>Состоит из расчетных экспериментов, изучения аэродинамики и физических законов </li>
                  <li>К программе прилагаются набор аэродинамических моделей: разных профилей крыльев, мост, лопасти, гондолы двигателя и многих других </li>
                  <li>Подходит для ссузов, доп. образования и школ </li>
                  <li>Апробированы ряд решений </li>
                </ol>
              </div>
            </div>
            <div className='flex justify-center pl-20 items-center'>
              <img className='hidden md:block object-scale-down' src={Schools1}/>
            </div>
          </div>
        </div>
      </div>

      {/* Schools 2 */}
      <div id="schools-2" className='mt-10 md:mt-20 flex flex-col md:min-h-[600px]'>
        <div className='w-full'>
          <div className='float-right rounded-bl-3xl bg-white text-main px-10 py-1 w-[90%] md:w-3/5'>
            <h2 className='text-roboto md:py-2 font-medium text-lg md:text-[40px]'>АДТ ИССЛЕДОВАТЕЛЬСКАЯ – ВУЗАМ, СПО</h2>
          </div>
        </div>
        <div className='container'>
          <div className='mt-10 md:mt-20 md:grid md:grid-cols-2'>
            <div className='flex max-lg:mt-5 justify-center pr-20 items-center'>
              <img className='hidden md:block object-scale-down' src={Schools2}/>
            </div>
            <div className='flex flex-col items-center'>
              <h4 className='text-[20px] text-center'>
                Использование АДТ в ВУЗах
              </h4>
              <div className='border-[7px] border-border pl-10 rounded-2xl mt-5 py-3 pr-5'>
                <ol className='list-disc text-[16px]'>
                  Возможности:
                  <li>Использование для лабораторных работ</li>
                  <li>Проверка теорий</li>
                  Особенности:
                  <li>Высокая точность</li>
                  <li>Есть патент на изобретение</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schools 3 */}
      <div id="schools-3" className='md:min-h-[600px]'>
        <div className='bg-white rounded-br-3xl mt-10 md:mt-20 w-[90%] md:w-3/5'>
          <h2 className='text-main md:py-2 font-medium text-lg md:text-[40px] text-roboto mx-5 md:mx-20 py-1'>
            АДТ СОЗИДАЮЩАЯ – МАЛЫМ И СТУД. КБ, РАЗРАБОТЧИКАМ БАС
          </h2>
        </div>
        <div className='container'>
          <div className='mt-10 md:mt-20 md:grid md:grid-cols-2'>
            <div className='md:ml-20'>
              <h4 className='text-[20px] text-center'>
                Использование АДТ на этапе созданиия ЛА и БАС
              </h4>
              <div className=' border-[7px] border-border pl-10 rounded-2xl mt-5 py-3'>
                <ol className='list-disc text-[16px]'>
                  <li>Привлечение студентов к решению практических задач от предприятий-потребителей кадров</li>
                  <li>Увеличение внебюджетных доходов</li>
                  <li>Проверка гипотез и доказательство теорий</li>
                  <li>Сокращение времени разработки образцов ЛА </li>
                  <li>Сокращение расходов на разработку</li>
                  <li>Практические занятия и профориентация</li>
                </ol>
              </div>
            </div>
            <div className='flex max-lg:mt-5 justify-center pl-20 items-center'>
              <img className='hidden md:block object-scale-down' src={Schools1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schools