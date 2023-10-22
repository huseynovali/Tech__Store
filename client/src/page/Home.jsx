import React from 'react'
import Slide from '../components/HomeCom/Slide'
import Container from '../components/Container'
import NewProduct from '../components/HomeCom/NewProduct'
function Home() {
  return (
    <div>
      <Container>
            <Slide/>
            <NewProduct/>
      </Container>
 
    </div>
  )
}

export default Home