import React from 'react'
import Slide from '../components/HomeCom/Slide'
import Container from '../components/Container'
import NewProduct from '../components/HomeCom/NewProduct'
import ZipContainer from '../components/HomeCom/ZipContainer'
function Home() {
  return (
    <div>
      <Container>
            <Slide/>
            <NewProduct/>
            <ZipContainer/>
      </Container>
 
    </div>
  )
}

export default Home