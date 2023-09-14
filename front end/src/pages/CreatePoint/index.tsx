import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import api from '../../services/api'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'

interface Item {
    id: number,
    title: string,
    image_url: string;
}

export function CreatePoint() {
    const [items, setItems] = useState<Item[]>([])

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
                        />
                    </div>

                    <div className='field-group'>
                        <div className='field'>
                            <label htmlFor='email'> E-mail </label>
                            <input 
                                type='email' 
                                name='email'
                                id='email'
                            />
                        </div>

                        <div className='field'>

                            <label htmlFor='whatsapp'> Whatsapp </label>
                            <input 
                                type='text' 
                                name='whatsapp'
                                id='whatsapp'
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
                            <label htmlFor='uf'>Estado (UF)</label>
                            <select name='uf' id='uf'>
                                <option value='0'>Selecione uma UF</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor='city'>Cidade</label>
                            <select name='city' id='city'>
                                <option value='0'>Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                

                <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false} style={{height: '100$', width: '100%'}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[0, 0]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
                

                <fieldset>
                    <legend>
                        <h2>Items de coleta: </h2>
                        <span>Selecione um ou mais abaixo</span>
                    </legend>

                    <ul className='items-grid'>
                        {items.map(item => (
                            <li>   
                                <img src='https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' alt='' />
                                <span>{item.title}</span>
                            </li>
                        ))}
                        
                        
                    </ul>
                </fieldset>

            </form>
        </div>
    )
}