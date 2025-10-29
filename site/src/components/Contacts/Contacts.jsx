import React from 'react'
import fasie from '/assets/fasie.png'

const Contacts = () => {
  return (
    <div>
      <div className='max-md:mt-10 md:mt-20 px-5 py-1 bg-white w-3/4 md:w-1/2 rounded-br-3xl'>
        <h2 className='text-main font-roboto font-medium max-md:text-xl md:text-[40px] text-center'>
          КОНТАКТЫ
        </h2>
      </div>
      <div className='container max-md:my-10 md:my-20 flex max-md:flex-col max-md:items-center flex-row justify-around gap-5'>
        {/* Contact Info Block */}
        <div className='flex-1 max-md:px-5 md:px-20 rounded-[30px] py-5 md:py-10 bg-gradient-to-br from-gd0 via-gd40 to-gd70 flex items-center justify-center'>
          <p className='text-white max-md:text-xs md:text-[25px] font-regular font-roboto'>
            Тел: +7 (926) 545-73-91<br/>
            E-mail: FlowTechADT@yandex.ru<br/>
            Контактное лицо: Усачев Никита
          </p>
        </div>
        
        {/* Text & Image Block */}
        <div className='flex-1 rounded-[30px] overflow-hidden flex flex-col bg-gradient-to-br from-gd0 via-gd40 to-gd70'>
          {/* Text Section */}
          <div className='flex-1 p-5 flex items-center justify-center'>
            <p className='text-white max-md:text-[14px] md:text-[18px] font-regular font-roboto text-justify'>
              Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства".
            </p>
          </div>
          
          {/* Image Section */}
          <div className='flex-1 p-5 flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={fasie} alt="FASIE Logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
