import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className='mt-10 md:mt-20 px-5 py-1 md:py-2 bg-white w-3/4 md:w-1/2 rounded-br-3xl'>
        <h2 className='text-main md:py-1 text-roboto font-semibold text-2xl md:text-[50px] text-center'>
          КОНТАКТЫ
        </h2>
      </div>
      <div className='container'>
        <div className='mt-10 px-10 md:px-20 rounded-[30px] py-5 md:py-10 bg-gradient-to-br from-gd0 via-gd40 to-gd70 '>
          <p className='text-white text-sm md:text-[25px] text-roboto'>
          Тел: +7 (926) 545-73-91<br/>
          E-mail: FlowTechADT@yandex.ru<br/>
          Контактное лицо: Усачев Никита
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contacts