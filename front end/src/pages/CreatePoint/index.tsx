import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'

import api from '../../services/api'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

import { LocationEvent } from 'leaflet'

interface Item {
    id: number,
    title: string,
    image_url: string;
}
type IBGEUFresponse = {
    id: number;
    sigla: string;
    nome: string;
}

type IBGECityResponse = {
    nome: string
}

export function CreatePoint() {
    const [items, setItems] = useState<Item[]>([])
    const [ufs, setUfs] = useState<IBGEUFresponse[]>([])
    const [cities, setCities] = useState<IBGECityResponse[]>([])

    const [ufSeleted, setUfSelected] = useState('0')
    const [seletedCity, setSelectedCity] = useState('0')
    const [selecetedItems, setSelectedItems] = useState<number[]>([])

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',

    })

    useEffect(() => {
    // counter
        api.get('/items')
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.log(`houve algum erro ${error}`)
            })
    }, [])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then(response => {
                setUfs(response.data)

            })
            .catch(error => console.log(error))
    }, [])

    function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setUfSelected(uf)
    }

    useEffect(() => {
        if(ufSeleted === '0') {
            return;
        } 

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSeleted}/municipios`)
            .then(response => {
                const cityName = response.data.map(city => city.nome)
                
                setCities(cityName)
            })
    }, [ufSeleted])

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.data.value;

        setSelectedCity(city)
    }

    function LocationMarker() {
        const [position, setPosition] = useState(null)

        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>Voce esta aqui.</Popup>
          </Marker>
        )
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        // abstracao do que quero extrair nosso event
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value})
    }

    function handleSelecItem(id: number) {
        setSelectedItems([id]);
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt='ecoleta' />

                <Link to='/'>
                   <FiArrowLeft />Voltar para home 
                </Link>
            </header>

            <form action=''>
                <h1>cadastro do <br /> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados: </h2>
                    </legend>
                    <div className="field">
                        <label htmlFor=''> Nome da entidade</label>
                        <input 
                            type='text' 
                            name='name'
                            id='name'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='field-group'>
                        <div className='field'>
                            <label htmlFor='email'> E-mail </label>
                            <input 
                                type='email' 
                                name='email'
                                id='email'
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'>

                            <label htmlFor='whatsapp'> Whatsapp </label>
                            <input 
                                type='text' 
                                name='whatsapp'
                                id='whatsapp'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereco: </h2>
                        <span>Selecione o endereco no mapa</span>
                    </legend>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor='uf'>Selecione uma (UF) </label>
                            <select name='uf' id='uf' value={ufSeleted} onChange={handleSelectedUf}> 
                                <option value='0'>Qual estado? </option>
                                {ufs.map(uf => (
                                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor='city'>Cidade</label>
                            <select name='city' value={seletedCity} onChange={handleSelectCity} id='city'>
                                <option value="0">Selecione sua cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                    <MapContainer
                        center={{ lat: -7.1150000, lng: -34.8630600 }}
                        zoom={13}
                        scrollWheelZoom={true}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <LocationMarker />
                    </MapContainer>,           

                <fieldset>
                    <legend>
                        <h2>Items de coleta: </h2>
                        <span>Selecione um ou mais abaixo</span>
                    </legend>

                    <ul className='items-grid'>
                        {items.map(item => (
                            <li key={item.id} onClick={() => handleSelecItem(item.id)}>   
                                <img src={item.image_url} alt={item.title} />
                                <span>{item.title}</span>
                            </li>
                        ))}      
                    </ul>
                </fieldset>
                <button type='submit'>Cadastrar ponto de coleta</button>
            </form>
        </div>
    )
}