export const categories = [
    {
        id: 1,
        name: 'Burger',
        image: require('../assets/images/burger.jpg'),
    },
    {
        id: 2,
        name: 'Donught',
        image: require('../assets/images/donught.png'),
    },
    {
        id: 3,
        name: 'Ice-cream',
        image: require('../assets/images/icecream.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizza.png'),
    },
    {
        id: 5,
        name: 'Sussage',
        image: require('../assets/images/sussage.png'),
    },
    {
        id: 6,
        name: 'Toast',
        image: require('../assets/images/toast.png'),
    },

]

export const featured = {
    id: 1,
    title: 'Featured Restaurants',
    restaurants: [
        {
            id: 1,
            name: "McDonald's",
            image: require('../assets/images/mcdonalds.png'),
            description: 'Ground Beef Tacos',
            lng: -80.5324269,
            lat: 38.2145602,
            description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
            stars: 4.5,
            reviews: '25k+',
            category: 'Burger',
            price: "9.50",
            dishes: [
                {
                   id: 1,
                   name: 'Pepper Julienned',
                   price: 2.30,
                   image:  require('../assets/images/pepper.png')
                },
                {
                   id: 2,
                   name: 'Baby Spinach',
                   price: 4.70,
                   image:  require('../assets/images/spinach.png')
                },
                {
                   id: 3,
                   name: 'Mushroom',
                   price: 2.50,
                   image:  require('../assets/images/mushroom.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Starbucks',
            image: require('../assets/images/starbucks.png'),
            description: 'Ground Beef Tacos',
            lng: -80.5324269,
            lat: 38.2145602,
            description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
            stars: 4.5,
            reviews: '25k+',
            category: 'Burger',
            price: "9.50",
            dishes: [
                {
                   id: 1,
                   name: 'Pepper Julienned',
                   price: 2.30,
                   image:  require('../assets/images/pepper.png')
                },
                {
                   id: 2,
                   name: 'Baby Spinach',
                   price: 4.70,
                   image:  require('../assets/images/spinach.png')
                },
                {
                   id: 3,
                   name: 'Mushroom',
                   price: 2.50,
                   image:  require('../assets/images/mushroom.png')
                },
            ]
    
        },
        {
            id: 3,
            name: "McDonald's",
            image: require('../assets/images/mcdonalds.png'),
            description: 'Ground Beef Tacos',
            lng: -80.5324269,
            lat: 38.2145602,
            description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
            stars: 4.5,
            reviews: '25k+',
            category: 'Burger',
            price: "9.50",
            dishes: [
                {
                   id: 1,
                   name: 'Pepper Julienned',
                   price: 2.30,
                   image:  require('../assets/images/pepper.png')
                },
                {
                   id: 2,
                   name: 'Baby Spinach',
                   price: 4.70,
                   image:  require('../assets/images/spinach.png')
                },
                {
                   id: 3,
                   name: 'Mushroom',
                   price: 2.50,
                   image:  require('../assets/images/mushroom.png')
                },
            ]
    
        },
    ]
}