import React from 'react'
import About1 from '/assets/About 1.png' 
import Mishustin from '/assets/Mishustin.png' 

const About = () => {
  return (
    <div className='bg-main pt-10 flex flex-col'>
        {/* Об АДТ */}
        <div className=''>
            <div>
                <div className='bg-white w-3/5 rounded-br-3xl'>
                    <h2 className='text-roboto text-[55px] text-main text-center px-5 py-2'>ЧТО ТАКОЕ АДТ?</h2>
                </div>
                <div className='lg:grid container text-white lg:grid-cols-2 my-10'>
                    <p className='m-5 mt-10 text-open-sans text-[16px]'>
                        Аэродинамическая труба (АДТ) — техническое устройство, предназначенное для моделирования воздействия среды на движущиеся в ней тела. АДТ позволяют проводить физические эксперименты на полномасштабных/масштабированных объектах и получать данные, которые могут быть использованы для оптимизации формы и конструкции различных объектов.
                    </p>
                    <div className='flex justify-center'>
                        <div className='mx-[10%]'>
                            <img className='rounded-3xl object-scale-down self-center' src={About1}/>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Мишустин */}
        <div className='flex justify-end items-end'>
            <div className='relative h-auto w-auto'>
                <div className='bg-white absolute top-0 w-4/5 right-0 z-40 text-main px-5 pb-2 rounded-bl-3xl'>
                    <h2 className='text-roboto text-[40px]'>Михаил Владимирович Мишустин</h2>
                    <p className='text-right text-[20px]'>Председатель Правительства России</p>
                </div>
                <div className='lg:grid rounded-l-[40px] z-30 text-white lg:grid-cols-[600px_auto] my-10 bg-gradient-to-tr from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100'>
                    <p className='my-auto ml-[30%] w-[400px] text-open-sans text-[20px]'>
                        “В соответствии с базовым сценарием Стратегии развития беспилотной авиации РФ на период до 2030 года (утверждена распоряжение Правительства РФ №1630-р от 21.06.23г.) к 2030 году необходимо подготовить 1 млн. работников сферы БПЛА.”
                    </p>
                    <div className='mt-10 mr-32'>
                        <img className='h-[500px] self-center' src={Mishustin}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About