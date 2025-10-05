import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className='max-md:mt-10 md:mt-20 px-5 py-1 bg-white w-3/4 md:w-1/2 rounded-br-3xl'>
        <h2 className='text-main font-roboto font-medium max-md:text-xl md:text-[40px] text-center'>
          КОНТАКТЫ
        </h2>
      </div>
      <div className='container max-md:my-10 md:my-20'>
        <div className='max-md:px-5 md:px-20 rounded-[30px] py-5 md:py-10 bg-gradient-to-br from-gd0 via-gd40 to-gd70 '>
          <p className='text-white max-md:text-xs md:text-[25px] font-regular font-roboto'>
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