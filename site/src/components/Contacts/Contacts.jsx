import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className='mt-20 px-5 py-2 bg-white w-1/2 rounded-br-3xl'>
        <h2 className='text-main text-roboto text-[50px] text-center'>
          КОНТАКТЫ
        </h2>
      </div>
      <div className='container'>
        <div className='mt-10 px-20 rounded-[30px] py-10 bg-gradient-to-br from-gd0 via-gd40 to-gd70 '>
          <p className='text-white text-[25px] text-roboto'>
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