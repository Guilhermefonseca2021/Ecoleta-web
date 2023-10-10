import { NavLink } from "react-router-dom";
import logoImg from '../../assets/logo.svg'
import { Container, Content, FormContainer, FormField, FormSpace, Header, Navbar } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { useEffect } from "react";
import { useFetchPoint } from '../../hooks/fetchPoints'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Popup } from "react-leaflet/Popup";

interface PointProps  {
  id: number;
  name: string;
}

export default function CreatePoint() {
  const { data } = useFetchPoint<PointProps[]>('https:./') 
  
  const position = [51.505, -0.09]

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos/rj`)
      .then(response => console.log(response.data))
  }, [])
  
  function handleSubmit(event: any){
    event.preventDefault();
    console.log('enviou')
  }
  
  return (
    <>
      <Container>
        <Header>
          <img src={logoImg} alt="" />

          <NavLink to='/'>
          <Navbar>
              <FaArrowLeft />
                Voltar
          </Navbar>
          </NavLink>
        </Header>

        <Content>
          <FormContainer>
            <h1> Cadastro do ponto de coleta</h1>

            <h2>Dados da identidade </h2>
            <label>Nome da entidade</label>
            <input type="text"  />

            
            <FormSpace>
            
              <div className="adress">
                <label >Endereco</label>
                <input type="text"  />
              </div>
              <div className="number">
                <label >Numero</label>
                <input type="text"  />
              </div>
            </FormSpace>

            <FormField>
              <div >
                <label>Estado</label>
                <select name="Contry" id="">
                  <option value='estado.id'>Estado</option>
                </select>
              </div>
              <div >
                <label>Cidade</label>
                <select name="Contry" id="">
                  <option value='estado.id'>Cidade</option>
                </select>
              </div>
            </FormField>

            <MapContainer center={position} zoom={14} scrollWheelZoom={false} id="map">
              <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Marcar ponto de coleta.
                </Popup>
              </Marker>
            </MapContainer>

            <h2>Items de coleta</h2>

            <ul>
              { 
                data?.map(item => {
                  return(
                    <li key={item.id}>{item.name}</li>
                  )
                })
              }
            </ul>
            <p></p>

            <button type="submit" onClick={handleSubmit}>
              Enviar ponto de coleta
            </button>
          </FormContainer>
        </Content>
      </Container>
    </>
  )
}
