import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import './styles'
import { Container, Content, Header, Navbar } from './styles'
import { FaArrowRightToBracket,  FaSistrix } from 'react-icons/fa6'


export default function Home() {

    return (
        <Container>
            <Header>
                <img src={logoImg} alt="" />

                <NavLink to='/create-point'>
                <Navbar>
                    <FaArrowRightToBracket />
                    Cadastre um ponto de coleta
                </Navbar>
                </NavLink>
            </Header>

            <Content>
                <h1>Seu marketplace coleta de residuos</h1>
                <p> 
                    Ajudamos pessoas a encontrar pontos de coleta
                    de forma eficiente.
                </p>

                <NavLink to='/create-point'>
                <button>
                    <FaSistrix />
                    Pesquisar pontos de coleta
                
                
                
                </button>
                </NavLink>
                
            </Content>
        </Container>
  )
}
