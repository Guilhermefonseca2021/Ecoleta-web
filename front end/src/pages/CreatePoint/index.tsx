import { NavLink } from "react-router-dom";
import logoImg from '../../assets/logo.svg'
import { Container, Content, FormContainer, FormField, FormSpace, Header, Navbar } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";
import { useFetchLocalStates } from '../../hooks/useFetchLocal'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Popup } from "react-leaflet/Popup";

export default function CreatePoint() {
  const { ufs, cities, handleSelectedUf, handleSelectedCity, selectedCity, selectedUf } = useFetchLocalStates() 
  
  const position = [51.505, -0.09]
  
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
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" />

            
            <FormSpace>
            
              <div className="adress">
                <label htmlFor="address">Endereco</label>
                <input type="text" name="address"  />
              </div>
              <div className="number">
                <label htmlFor="">Numero</label>
                <input type="text" name="addres" />
              </div>
            </FormSpace>

            <FormField>
              <div >
                <label htmlFor="uf">Estado:</label>
                <select name="uf" id="uf" value={selectedUf} onChange={handleSelectedUf}>
                  
                  <option value='0'>Selecione a UF</option>
                  {ufs.map(uf => {
                    return (
                      <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>     
                    )
                  })}
                </select>
              </div>
              <div >
                <label htmlFor="city">Cidade</label>
                <select name="city" id="city" value={selectedCity} onChange={handleSelectedCity}>

                  <option value='0' >Selecione a Cidade</option>
                  {cities.map(city => {
                    return (
                      <option key={city.id} value={city.nome}>{city.nome}</option>     
                    )
                  })}
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
              {/* selecionar items do back end */}
            </ul>

            <button type="submit" onClick={handleSubmit}>
              Enviar ponto de coleta
            </button>
          </FormContainer>
        </Content>
      </Container>
    </>
  )
}
