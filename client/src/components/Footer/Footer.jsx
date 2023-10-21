import React from 'react'
import Container from '../Container'
import FooterHeadSection from './FooterHeadSection'
import FooterList from './FooterList'
import FooterBottom from './FooterBottom'
import MobileFooter from './MobileFooter'

function Footer() {
  return (
    <div>
        <Container color={'#020203'}>
            <div className="desktop hidden lg:block">
            <FooterHeadSection/>
           <FooterList/>
           <FooterBottom/>
           </div>
           <div className="mobile block lg:hidden">
            <MobileFooter/>
           </div>
        </Container>
    </div>
  )
}

export default Footer