import BasketItem from "./BasketItem"

const DisplayBasket = ({basket}) => {
    const basketItems = basket.map((basketObj, index) => {
        return (
            <BasketItem key={index}
            itemId={basketObj.itemId}
            price={basketObj.price.toFixed(2)}
            imageurl={basketObj.imageurl}
            >
        </BasketItem>
        )
    })

    const total = ()=>{
        const totalPrice = basket.reduce((runningTot, item) => (runningTot + item.price), 0)
        return totalPrice.toFixed(2)
    }
    return(
        <>
            <h2><u>Shopping Cart</u></h2>
            <h3>Total: £{total()}</h3>
            <ul className="basketItems">
                {basketItems}
            </ul>
        </>
    )
}

export default DisplayBasket;