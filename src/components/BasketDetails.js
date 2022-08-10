import styled from "styled-components";
import DisplayBasket from "./DisplayBasket";
import {useState} from 'react'

const BasketDetails = ({basket}) => {
    const [showBasket, setShowBasket] = useState(false)
    const displayBasket = () => {
        setShowBasket(!showBasket);
       
    }
    return (
        <Wrapper>
            <Welcome>Welcome back, Malcolm ..</Welcome>
            <BasketNumber>{basket.length}</BasketNumber>
            <ImageBasket onClick={displayBasket}>🛒</ImageBasket>
            {showBasket ? (<DisplayBasket basket={basket}/>) : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
border:solid black 2px;
border-radius: 10px;
display:flex;
flex-direction:column;
align-items:center; 
background-color: white;
`
;

const Welcome = styled.h5``
const BasketNumber = styled.h3``
const ImageBasket = styled.h1``


export default BasketDetails;