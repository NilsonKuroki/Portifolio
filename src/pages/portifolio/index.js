import React from 'react'
import {ContainerPortifolio} from './styled'
import {Menu} from '../../components/menu'
import {Iam} from '../../components/iam'
import {AboutMe} from '../../components/aboutMe'
import {Knowledges} from '../../components/knowledges'
import {Education} from '../../components/education'
import {Projects} from '../../components/projects'
import {Contacts} from '../../components/contacts'
import {Footer} from '../../components/footer'

export const Portifolio = () =>{
  return(
    <ContainerPortifolio>
      <Menu/>
      <Iam/>
      <AboutMe/>
      <Knowledges/>
      <Education/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </ContainerPortifolio>
  )
}