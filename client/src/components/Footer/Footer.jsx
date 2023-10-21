import React from 'react'
import Container from '../Container'
import FooterHeadSection from './FooterHeadSection'
import FooterList from './FooterList'

function Footer() {
  return (
    <div>
        <Container color={'#020203'}>
            <FooterHeadSection/>
           <FooterList/>
        </Container>
    </div>
  )
}

export default Footer