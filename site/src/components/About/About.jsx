import React from 'react'
import About1 from '/assets/About 1.png' 

const About = () => {
  return (
    <div className='bg-main pt-10'>
      {/* Об АДТ */}
      <div className='bg-white w-3/5 rounded-br-3xl'>
        <h2 className='text-roboto text-[55px] text-main text-center px-5 py-2'>ЧТО ТАКОЕ АДТ?</h2>
      </div>
      <div className='lg:grid container text-white lg:grid-cols-2 my-10'>
        <text className='m-5 text-open-sans text-[16px]'>
          Аэродинамическая труба (АДТ) — техническое устройство, предназначенное для моделирования воздействия среды на движущиеся в ней тела. АДТ позволяют проводить физические эксперименты на полномасштабных/масштабированных объектах и получать данные, которые могут быть использованы для оптимизации формы и конструкции различных объектов.
        </text>
        <img className='rounded-3xl self-center' src={About1}/>
      </div>
    </div>
  )
}

export default About