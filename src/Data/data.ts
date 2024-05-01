export type CattleFarm = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;

};

const cattleFarms: CattleFarm[] = [
    {
        id: 1,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Verzon Dairy - Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Ecma Farma Lhr',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
]

export type Product = {
    id: number;
    name: string;
    image: any;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 2,
        name: 'Dairy Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 3,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 4,
        name: 'Meat',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 5,
        name: 'Yougurt',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 6,
        name: 'Honey',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 7,
        name: 'Beaf Meat',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 8,
        name: 'Chickens',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 9,
        name: 'Cheesse',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 10,
        name: 'Oil & Ghee',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 11,
        name: 'Cow Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 12,
        name: 'Butter & Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 13,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 14,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
]

export type Category = {
    id: number;
    name: string;
    image: any;
}

const category: Category[] = [
    {
        id: 1,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 2,
        name: 'Dairy Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 3,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 4,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 5,
        name: 'Dairy Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 6,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 7,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
]
export type Bakeries = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const bakeries: Bakeries[] = [
    {
        id: 1,
        name: 'Jalal Sons',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Layers',
        rating: '3.5(500)',
        deliveryTime: '40 - 55 min',
        deliveryPrice: '150 PKR',
        minOrder: '350 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '140',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Cakes and Bakes',
        rating: '5(100)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '200 PKR',
        minOrder: '400 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1650',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Bundo Khan',
        rating: '3.5(250)',
        deliveryTime: '45 - 55 min',
        deliveryPrice: '199 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Gorment',
        rating: '5(1000)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '120 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 6,
        name: 'Laraib Bakers',
        rating: '3.5(100)',
        deliveryTime: '40 - 50 min',
        deliveryPrice: '150 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '900',
        location: 'Lahore',
    },
    {
        id: 7,
        name: 'Jalal Sons',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
];

export {cattleFarms, products, bakeries, category};  