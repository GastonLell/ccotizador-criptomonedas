import React, {useState} from 'react'
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
        width: 100%;
        display: block;
        padding: 1rem;
        -webkit-appearance: none;
        border-radius: 10px;
        border: none;
`;

const useMoneda = (label, stateInitia, opciones) => {
    const [state, setState] = useState(stateInitia);


    const Seleccionar = () => ( 
        <>
            <Label>{label}</Label>
            <Select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                {
                    opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))
                }
            </Select>
        </> 
    )

    return [state, Seleccionar, setState];
}
export default useMoneda;