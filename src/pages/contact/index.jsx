import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/diego-santos-83b109157/" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/diego_santos074/?igshid=ZDdkNTZiNTM%3D" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="sousadiego953@gmail.com" 
        />
      </Content>
    </Container>
  )
}