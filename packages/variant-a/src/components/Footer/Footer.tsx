const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='w-full py-2 bg-secondary flex justify-center'>
      <p className='max-md:text-xs md:text-lg'>&copy; {year} FlowTech. Все права защищены.</p>
    </div>
  )
}

export default Footer
