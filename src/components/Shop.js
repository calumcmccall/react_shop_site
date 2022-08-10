import BallList from "./BallList";

const Shop = ({stock, onItemAdd}) => {

    return (
        <>
            <BallList stock={stock} onItemAdd={onItemAdd}/>
        </>
    )
}

export default Shop;