import { v4 as uuidv4 } from 'uuid';

const categoriesData = [
    {
        id: uuidv4(),
        title:"Shirts",
        imgUrl:"https://i.ibb.co/TcKXPj8/shirt.jpg",
    },
    {
        id: uuidv4(),
        title:"T-Shirts",
        imgUrl:"https://i.ibb.co/ZLHFKjQ/tshirt.jpg",
    },
    {
        id: uuidv4(),
        title:"Jeans",
        imgUrl:"https://i.ibb.co/cgkF1N5/jeans.jpg",
    },
    {
        id: uuidv4(),
        title:"Wallets",
        imgUrl:"https://i.ibb.co/LhqJMQM/wallet.jpg",
    },
    {
        id: uuidv4(),
        title:"Shoes",
        imgUrl:"https://i.ibb.co/nMDwj3m/shoes.jpg",
    },
];

const ratingData = [
    {
        id:uuidv4(),
        title:"4 star & above"
    },
    {
        id:uuidv4(),
        title:"3 star & above"
    },
    {
        id:uuidv4(),
        title:"2 star & above"
    },
    {
        id:uuidv4(),
        title:"1 star & above"
    },

]


export {categoriesData, ratingData}

