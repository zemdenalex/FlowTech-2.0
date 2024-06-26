import React from 'react'
import ADT from '/assets/ADT.png'
const Hero = () => {
  return (
    <div className='w-full text-white pt-5 pb-10 bg-gradient-to-br from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100 '>
      <div className='container'>
        <h1 className='font-roboto lg:text-[70px] max-w-[]'>АЭРОДИНАМИЧЕСКАЯ ТРУБА FLOWTECH</h1>
        <div className='lg:grid grid-cols-2'>
          <div>
            <ol className='list-disc font-openSans lg:text-[25px] italic font-thin my-5'>
              <li>Изучение аэродинамики</li>
              <li>Проведение аэродинамических экспериментов</li>
              <li>Испытание аэродинамических учебных моделей ЛАм архитектурных объектов</li>
              <li>Проведение науч-поп шоу</li>
            </ol>
          </div>
          <div className='flex justify-center'>
            <div>
              <img src={ADT} alt="АДТ FlowTech" className=''/>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className='border-[7px] mt-5 border-border rounded-3xl'>
          <div className='flex justify-center my-3'>
            <h3 className=''>Выберите свою категорию:</h3>
          </div>
          <div className='flex justify-around px-3 mb-3 text-black'>
            <button className='bg-white lg:rounded-2xl text-wrap px-3 text-center lg:w-[250px] lg:h-[70px]'>Школы, кванториумы, ЦМИТы</button>
            <button className='bg-white lg:rounded-2xl text-wrap px-3 text-center lg:w-[250px] lg:h-[70px]'>ВУЗы, СПО</button>
            <button className='bg-white lg:rounded-2xl text-wrap px-3 text-center lg:w-[250px] lg:h-[70px]'>Малые КБ, разработчики БАС</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero