import styled from'styled-components'
const BallDetails = ({ sport, price, imageurl, children, onItemAdd, itemId}) => {
    const handleClick = event => {
        onItemAdd(event.target.value)
    }


    return (
        <Wrapper>
            <ProfileImage src={imageurl}/>
            <Sport>
                {sport}
            </Sport>
            <Description>
                {children}
            </Description>
            <Price>
                £{price}
            </Price>
            <button value={itemId} onClick={handleClick}>Add To Basket</button>
    
        </Wrapper>
    )
}

const Wrapper = styled.li`
width:15%;
padding: 5%;
border:solid black 2px;
border-radius: 10px;
box-shadow: 10px 10px gray;
display:flex;
flex-direction:column;
align-items:center;
height: 30%;
`
;

const ProfileImage = styled.img.attrs(props => ({ src: props.src }))`
width: 80%`;

const Sport = styled.div`
font-weight:bold;
    
`;

const Description = styled.div`
    padding: 10%;
`;

const Price = styled.div`
    padding:10%;
`;

export default BallDetails;