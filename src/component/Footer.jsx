import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
    <div className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
      <p className='text-zinc-500 text-sm font-semibold'>© {year} Alejandro Gomez Nieto. Diseño: <a href="https://www.craftz.dog/" target='_blank'>Takuya Matsuyama</a></p>
    </div>
    </footer>
  )
}

export default Footer