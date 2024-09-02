const products = [
    {
        id: '1',
        name: 'Buzo nene',
        price: 12.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image1.jpg',
        description: 'Un buzo cómodo y cálido para niños.',
        category: 'bebes'
    },
    {
        id: '2',
        name: 'Medias Nena',
        price: 10.00,
        discountPrice: 5.00,
        img: '/src/assets/images/image2.jpg',
        description: 'Medias suaves y cómodas para niñas.',
        category: 'bebes'
    },
    {
        id: '3',
        name: 'Zapatillas Niña',
        price: 29.00,
        discountPrice: 20.00,
        img: '/src/assets/images/image3.jpg',
        description: 'Zapatillas deportivas para niñas.',
        category: 'bebes'
    },
    {
        id: '4',
        name: 'Cochecito',
        price: 120.00,
        discountPrice: 60.00,
        img: '/src/assets/images/image4.jpg',
        description: 'Cochecito de paseo para bebés.',
        category: 'bebes'
    },
    {
        id: '5',
        name: 'Gestos',
        price: 20.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image5.jpg',
        description: 'Juguete interactivo para bebés.',
        category: 'bebes'
    },
    {
        id: '6',
        name: 'Buzo Nena',
        price: 15.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image6.jpg',
        description: 'Buzo abrigado para niñas.',
        category: 'bebes'
    },
    {
        id: '7',
        name: 'Camiseta Niño',
        price: 12.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image7.jpg',
        description: 'Camiseta de algodón para niños.',
        category: 'ninos'
    },
    {
        id: '8',
        name: 'Pantalones Niño',
        price: 15.00,
        discountPrice: 12.00,
        img: '/src/assets/images/image8.jpg',
        description: 'Pantalones de mezclilla para niños.',
        category: 'ninos'
    },
    {
        id: '9',
        name: 'Zapatos Niño',
        price: 22.00,
        discountPrice: 19.00,
        img: '/src/assets/images/image9.jpg',
        description: 'Zapatos resistentes para niños.',
        category: 'ninos'
    },
    {
        id: '10',
        name: 'Chamarra Niño',
        price: 35.00,
        discountPrice: 28.00,
        img: '/src/assets/images/image10.jpg',
        description: 'Chamarra abrigada para niños.',
        category: 'ninos'
    },
    {
        id: '11',
        name: 'Gorra Niño',
        price: 10.00,
        discountPrice: 8.00,
        img: '/src/assets/images/image11.jpg',
        description: 'Gorra deportiva para niños.',
        category: 'ninos'
    },
    {
        id: '12',
        name: 'Mochila Niño',
        price: 20.00,
        discountPrice: 18.00,
        img: '/src/assets/images/image12.jpg',
        description: 'Mochila escolar para niños.',
        category: 'ninos'
    },
    {
        id: '13',
        name: 'Vestido Niña',
        price: 20.00,
        discountPrice: 15.00,
        img: '/src/assets/images/image13.jpg',
        description: 'Vestido elegante para niñas.',
        category: 'ninas'
    },
    {
        id: '14',
        name: 'Falda Niña',
        price: 18.00,
        discountPrice: 14.00,
        img: '/src/assets/images/image14.jpg',
        description: 'Falda cómoda para niñas.',
        category: 'ninas'
    },
    {
        id: '15',
        name: 'Blusa Niña',
        price: 22.00,
        discountPrice: 19.00,
        img: '/src/assets/images/image15.jpg',
        description: 'Blusa bonita para niñas.',
        category: 'ninas'
    },
    {
        id: '16',
        name: 'Leggings Niña',
        price: 12.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image16.jpg',
        description: 'Leggings cómodos para niñas.',
        category: 'ninas'
    },
    {
        id: '17',
        name: 'Zapatos Niña',
        price: 25.00,
        discountPrice: 20.00,
        img: '/src/assets/images/image17.jpg',
        description: 'Zapatos elegantes para niñas.',
        category: 'ninas'
    },
    {
        id: '18',
        name: 'Suéter Niña',
        price: 30.00,
        discountPrice: 25.00,
        img: '/src/assets/images/image18.jpg',
        description: 'Suéter abrigado para niñas.',
        category: 'ninas'
    },
    {
        id: '19',
        name: 'Sombrero',
        price: 10.00,
        discountPrice: 8.00,
        img: '/src/assets/images/image19.jpg',
        description: 'Sombrero elegante para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '20',
        name: 'Bufanda',
        price: 12.00,
        discountPrice: 10.00,
        img: '/src/assets/images/image20.jpg',
        description: 'Bufanda cálida para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '21',
        name: 'Gafas de Sol',
        price: 15.00,
        discountPrice: 12.00,
        img: '/src/assets/images/image21.jpg',
        description: 'Gafas de sol modernas para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '22',
        name: 'Mochila',
        price: 20.00,
        discountPrice: 18.00,
        img: '/src/assets/images/image22.jpg',
        description: 'Mochila práctica para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '23',
        name: 'Cinturón',
        price: 8.00,
        discountPrice: 6.00,
        img: '/src/assets/images/image23.jpg',
        description: 'Cinturón ajustable para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '24',
        name: 'Reloj',
        price: 30.00,
        discountPrice: 25.00,
        img: '/src/assets/images/image24.jpg',
        description: 'Reloj elegante para todas las edades.',
        category: 'accesorios'
    },
    {
        id: '25',
        name: 'Pelota',
        price: 8.00,
        discountPrice: 6.00,
        img: '/src/assets/images/image25.jpg',
        description: 'Pelota divertida para jugar.',
        category: 'juguetes'
    },
    {
        id: '26',
        name: 'Muñeca',
        price: 20.00,
        discountPrice: 15.00,
        img: '/src/assets/images/image26.jpg',
        description: 'Muñeca con accesorios.',
        category: 'juguetes'
    },
    {
        id: '27',
        name: 'Carrito',
        price: 18.00,
        discountPrice: 14.00,
        img: '/src/assets/images/image27.jpg',
        description: 'Carrito a control remoto.',
        category: 'juguetes'
    },
    {
        id: '28',
        name: 'Lego',
        price: 30.00,
        discountPrice: 25.00,
        img: '/src/assets/images/image28.jpg',
        description: 'Set de construcción Lego.',
        category: 'juguetes'
    },
    {
        id: '29',
        name: 'Rompecabezas',
        price: 15.00,
        discountPrice: 12.00,
        img: '/src/assets/images/image29.jpg',
        description: 'Rompecabezas de 500 piezas.',
        category: 'juguetes'
    },
    {
        id: '30',
        name: 'Avión',
        price: 25.00,
        discountPrice: 20.00,
        img: '/src/assets/images/image30.jpg',
        description: 'Avión de juguete.',
        category: 'juguetes'
    }
];

export const getProductById = (id) => {
    return products.find(product => product.id === id);
}

export const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
}
