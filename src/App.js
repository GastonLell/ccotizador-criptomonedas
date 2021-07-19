import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import imagenCripto from './assets/cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`

  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem  ;
  }
`;

const Image = styled.img`
  display: none;

  @media (min-width: 992px){
    max-width: 100%;
    margin-top: 5rem;
    display: block  ;
  }
  
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin: 0 5px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
  @media (min-width: 992px){
    margin-bottom: 50px;
    margin-top: 80px;
  }


`;

function App() {

  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [cotizacion, setCotiacion] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
  
    const handleCotizar = async () => {
    
      if( moneda === "" ) return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      setCargando(true)

      //para mosttrar un spinner antes de mostrar el resultado
      setTimeout(() => {
        setCargando(false)
        setCotiacion(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 3000)

    }

    handleCotizar()

  }, [moneda, criptomoneda ])

  return (
    <Contenedor>

      <div>
        <Image src={imagenCripto} alt="imagen-criptomonedas"/>
      </div>

      <div>
        <Heading>
          Cotiza criptomonedas al instante
        </Heading>

        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda}/>

        {
          cargando ? <Spinner/> : <Cotizacion resultado={cotizacion}/>
        }
        

      </div>
    </Contenedor>   
  );
}

export default App;
