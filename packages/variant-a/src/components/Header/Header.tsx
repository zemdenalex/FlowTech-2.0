import Logo from '/assets/Logo-white.png'
import VKIcon from '/assets/VK.svg'
import TelegramIcon from '/assets/tg.png'

const Header = () => {
  return (
    <div id='header' className='flex h-14 bg-main text-white justify-between'>
      <div id='header-logo' className='w-24 flex justify-center items-center ml-2'>
        <img alt='Logo' src={Logo} className='object-contain' />
      </div>
      <div id='header-socials' className='flex justify-center mr-5 items-center'>
        <a target='_blank' href='https://t.me/Nick_Saims'>
          <img alt='Telegram Icon' src={TelegramIcon} className='object-contain w-5 h-5 mx-2' />
        </a>
        <a target='_blank' href='https://vk.com/flowtechadt'>
          <img alt='VK Icon' src={VKIcon} className='object-contain w-7 h-7 mx-2' />
        </a>
      </div>
    </div>
  )
}

export default Header
