import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Diego Santos</Name>
        <Function>Front-End Developer</Function>
        <Intro> Cursando Análise e Desenvolvimento de Sistemas no
             IFNMG-Campus Teófilo Otoni - MG 
            Atualmente estudando (React.js, Javascript, Next.js, Node.js, Python)
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/Diego.jpg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}