import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'


export function CreatePoint() {
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

                <fieldset>
                    <legend>
                        <h2>Items de coleta: </h2>
                        <span>Selecione um ou mais abaixo</span>
                    </legend>

                    <ul className='items-grid'>
                        <li>   
                            <img src='' alt='' />
                        </li>
                    </ul>
                </fieldset>

            </form>
        </div>
    )
}