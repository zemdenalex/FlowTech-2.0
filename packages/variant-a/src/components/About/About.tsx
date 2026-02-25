import About1 from '/assets/About 1.png'
import Mishustin from '/assets/Mishustin.png'

const About = () => {
  return (
    <div className='bg-main pt-10 flex flex-col'>
        {/* Об АДТ */}
        <div>
            <div>
                <div className='bg-white w-5/6 md:w-3/5 rounded-br-3xl'>
                    <h2 className='max-md:text-2xl font-roboto font-medium text-[55px] text-main text-center px-5 py-2'>ЧТО ТАКОЕ АДТ?</h2>
                </div>
                <div className='lg:grid container text-white lg:grid-cols-2 my-10'>
                    <p className='my-5 mt-10 max-md:text-sm text-[20px]'>
                        <b>Аэродинамическая труба (АДТ)</b> — техническое устройство, предназначенное для моделирования воздействия среды на движущиеся в ней тела. АДТ позволяют проводить физические эксперименты на полномасштабных/масштабированных объектах и получать данные, которые могут быть использованы для оптимизации формы и конструкции различных объектов.
                    </p>
                    <div className='flex justify-center'>
                        <div className='md:mx-[10%]'>
                            <img className='rounded-3xl object-scale-down self-center' src={About1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Мишустин */}
        <div className='md:flex md:justify-end md:items-end'>
            <div className='relative md:h-auto md:w-auto'>
                <div className='bg-white max-md:float-right absolute max-md:top-[-30px] w-[90%] md:w-4/5 right-0 z-40 text-main max-md:px-2 md:px-5 pb-2 rounded-bl-3xl'>
                    <h2 className='max-md:text-lg font-roboto font-medium text-[50px] text-main max-md:pl-5 md:px-4 pt-2'>Михаил Владимирович Мишустин</h2>
                    <p className='text-right max-md:text-sm md:pt-1 md:text-[20px]'>Председатель Правительства России</p>
                </div>
                <div>
                    <div className='md:grid pt-10 max-md:mt-10 max-md:w-full md:rounded-l-[40px] z-30 text-white md:grid-cols-[600px_auto] md:my-10 bg-gradient-to-tr from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100'>
                        <div className='pt-1 md:pt-16'>
                            <p className='my-auto text-roboto max-md:mt-10 max-md:mx-[10%] md:ml-[30%] md:w-[400px] max-md:text-sm md:text-[20px]'>
                                "В соответствии с базовым сценарием Стратегии развития беспилотной
                                авиации РФ на период до 2030 года (утверждена распоряжение Правительства
                                РФ №1630-р от 21.06.23г.) к 2030 году необходимо подготовить 1 млн. работников сферы БПЛА."
                            </p>
                        </div>
                        <div className='md:mt-10 md:mr-32'>
                            <img className='md:h-[500px] max-md:pt-5 max-md:pl-16 object-scale-down self-center' src={Mishustin}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
