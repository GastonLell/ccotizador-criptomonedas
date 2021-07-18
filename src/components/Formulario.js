import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 8px;
    color: #fff;
    transition: background-color .3s ease;
    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = () => {
    return ( 
        <form>

            <Button type="submit">Calcular</Button>
        </form>
     );
}
 
export default Formulario;