import styled from'styled-components'

const BasketItem = ({ sport, price, imageurl, itemId}) => {

    return (
        <Wrapper>
            <ProfileImage src={imageurl}/>
            <Price>
                £{price}
            </Price>
    
        </Wrapper>
    )
}

const Wrapper = styled.li`
width:15%;
border:solid black 1px;
display:flex;
flex-direction: column;
align-items:center`;

const ProfileImage = styled.img.attrs(props => ({ src: props.src }))`
width: 80%`;


const Price = styled.div`
    
`;

export default BasketItem;