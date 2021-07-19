import React from 'react'
import styled from 'styled-components';

const ResultadoContenedor = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.div`
    font-size: 18px;
    margin-bottom: 1rem;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 30px;
`;

const Cotizacion = ({resultado}) => {
    
    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <ResultadoContenedor>
            <Precio>El precio es: {resultado.PRICE}</Precio>
            <Info>El precio más alto del día: {resultado.HIGHDAY}</Info>
            <Info>El precio más bajo del día: {resultado.LOWDAY}</Info>
            <Info>Variacion últimas 24Hs.: {resultado.CHANGEPCT24HOUR}</Info>
            <Info>Última actualización: {resultado.LASTUPDATE}</Info>
        </ResultadoContenedor>
    );
}
 
export default Cotizacion;