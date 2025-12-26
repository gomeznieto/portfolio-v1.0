import {Outlet} from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import useMode from '../hooks/useMode'

const Main = () => {
  const {mode} = useMode()
  return (
    <>
      <Header/>
      <div className={`transition-all min-h-screen ${mode ? 'body-dark' : 'body-light'}`}>
        <main className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
          <div className="main-w">
            <Banner/>
            <Outlet/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Main
