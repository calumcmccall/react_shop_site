import BallDetails from "./BallDetails";

const BallList = ({stock, onItemAdd}) => {

    const stockList = stock.map(( stockObj, index) => {
        return (
            <BallDetails key={index}
                itemId={stockObj.itemId}
                sport={stockObj.sport}
                price={stockObj.price.toFixed(2)}
                imageurl={stockObj.imageurl}
                onItemAdd={onItemAdd}>
                {stockObj.description}
            </BallDetails>


        )
    })

    return (
        <div className="list">
            <ul className = "stockul">
                {stockList}
            </ul>
        </div>
    )

}

export default BallList;