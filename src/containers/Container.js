import HeadBar from "../components/HeadBar"
import Shop from "../components/Shop";
import {useState, useEffect} from 'react'
const Container = (()=>{

    const [basket, setBasket] = useState([])
    const [stock, setStock] = useState([
        {
            description:"normal baseball", 
            itemId: 0,
            sport:"baseball", 
            price:5.50, 
            imageurl:"https://fivethirtyeight.com/wp-content/uploads/2018/01/mobileinfo-01.png"
        },
        {
            description:"Select Football, white/black/gold", 
            itemId: 1,
            sport:"football", 
            price:3.50, 
            imageurl:"https://mediacache5.select-sport.com/9e/66/732e-807e-45c3-b686-f3a9972385c9/super_football_white_grey.png"
        },
                {
            description:"White, white golf balls", 
            itemId: 2,
            sport:"golf", 
            price:89.50, 
            imageurl:"https://static.golfonline.co.uk/media/img/2022_trufeel_white_01.600x600.png"
        },
        {
            description:"Posh ball", 
            itemId: 4,
            sport:"tennis", 
            price:6.40, 
            imageurl:"https://cdn.shopify.com/s/files/1/1870/4309/products/tennisball_900x_1e8c541e-c84b-409f-9768-0090c43f5457_large.png?v=1632837491"
        },
        {
            description:"Ping pong ballies", 
            itemId: 3,
            sport:"volley pong", 
            price:0.80, 
            imageurl:"https://www.kikkoman.com/en/foodforum/img/recipe-f-31-3-01.png"
        }
    ])

    // useEffect(() => {
    //     console.log(basket);
    // },[basket])


    const onItemAdd = (selectedItem) => {
		const newBasket = [...basket, stock[selectedItem]];
		setBasket(newBasket);
	};

    return (
        <>
            <HeadBar basket={basket}/>
            <Shop stock={stock} onItemAdd={onItemAdd}/>
        </>
    )
})

export default Container;