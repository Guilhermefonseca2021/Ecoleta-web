import { useState, useEffect, ChangeEvent} from 'react';
import axios from 'axios';

interface UFIBGEProps {
  id: number,
  sigla: string
  nome: string
}

interface IBGECITYProps {
  id: number,
  nome: string
}

export function useFetchLocalStates() {
  const [ufs, setUfs] = useState<UFIBGEProps[]>([])
  const [selectedUf, setSelectedUf] = useState('0')
  const [cities, setCities] = useState<IBGECITYProps[]>([])
  const [selectedCity, setSelectedCity] = useState('0')

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then(response => setUfs(response.data))
  }, [])

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => setCities(response.data))
  }, [selectedUf])

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value
    setSelectedUf(uf)
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value
    setSelectedCity(city)
  }
  
  return { ufs, selectedUf, handleSelectedUf, cities, selectedCity, handleSelectedCity}
}