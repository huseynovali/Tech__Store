import React from 'react'
import Slide from '../components/HomeCom/Slide'
import Container from '../components/Container'
import NewProduct from '../components/HomeCom/NewProduct'
import ZipContainer from '../components/HomeCom/ZipContainer'
import CustomeBuildsSection from '../components/HomeCom/CustomeBuildsSection'
function Home() {
  return (
    <div>
      <Container>
            <Slide/>
            <NewProduct/>
            <ZipContainer/>
            <CustomeBuildsSection/>
      </Container>
 
    </div>
  )
}

export default Home