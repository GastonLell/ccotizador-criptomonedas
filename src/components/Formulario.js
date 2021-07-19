import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';

const Button = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;
    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = ({setMoneda, setCriptomoneda}) => {

    const [criptoList, setCriptoList] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Estadounidense'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'},
    ]

    const [moneda, SelectMoneda, setState] = useMoneda('Elige una moneda', '', MONEDAS);
    const [cripto, SelectCripto, setCripto] = useCriptomoneda('Elige tu criptomoneda', '', criptoList);

    const handleCotizarMoneda = (e) => {
        e.preventDefault();

        if(moneda === "" || cripto === "") {
            setError(true);
            return;
        }

        setError(false)

        setMoneda(moneda);
        setCriptomoneda(cripto)
    }
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const resultado = await axios.get(url);
            setCriptoList(resultado.data.Data)
        }
        consultarAPI();
    }, [])

    return ( 
        <>
            { error && <Error mensaje="Usted  debe completar todos los campos"/> }

            <form onSubmit={handleCotizarMoneda}>
                <SelectMoneda/>
                <SelectCripto/>
                <Button type="submit">Calcular</Button>
            </form>

        </>
     );
}
 
export default Formulario;