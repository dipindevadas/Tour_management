import React from 'react'
import Header from '../Header/Header'

import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    
    <Header></Header>
   
    <Routers></Routers>
    <Footer></Footer>
    </>
  )
}

export default Layout