import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import { Outlet }  from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
