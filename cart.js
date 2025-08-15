document.addEventListener('alpine:init', () => {

    Alpine.store('cart', {

        items: [{
            id: 1,
            title: 'Taylors Swift 1989 CD',
            price: 40.00,
            image: 'https://54-bit-studios.myshopify.com/cdn/shop/files/1989-cd.webp?v=1750858346&width=1800',
            quantity: 1,
        },
        {
            id: 2,
            title: 'Lana Del Ray - Born To Die',
            price: 33.99,
            image: 'https://diginrecords.com/cdn/shop/files/b8ab2500-0fc5-4b1e-a5ec-ae2c66ce6944_400x400.jpg?v=1739566310',
            quantity: 1,
        }],

        total: 0,

        init() {
            console.log('init');
            this.total = this.items.reduce((acc, item) => acc + item.price, 0);
        },

        addItem(item) {
            this.items.push(item);
        },
    })
});
