import React from 'react'
import Container from '../Container'
import FooterHeadSection from './FooterHeadSection'
import FooterList from './FooterList'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <div>
        <Container color={'#020203'}>
            <FooterHeadSection/>
           <FooterList/>
           <FooterBottom/>
        </Container>
    </div>
  )
}

export default Footer