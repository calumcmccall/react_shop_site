import BasketDetails from "./BasketDetails";

const HeadBar = ({basket}) => {

    return (
        <div className="headbar">
            {/* <img width="80px" src="https://www.pngitem.com/pimgs/m/224-2245291_sports-balls-clip-art-sports-clipart-hd-png.png" alt="Logo Image" /> */}
            <h1>sports-balls.com</h1>
            <BasketDetails basket={basket}/>
        </div>
    )
}

export default HeadBar;