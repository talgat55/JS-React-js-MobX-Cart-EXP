class Store {
    products = [
        {
            id: 1,
            name: 'Casual Wears',
            description: 'Comfy and unisex',
            price: 50,
            image: '../img/item1.jpg'
        },
        {
            id: 2,
            name: 'Corporate wears & bags',
            description: 'Stylish',
            price: 350,
            image: '../img/item2.jpg'
        },
        {
            id: 3,
            name: 'Tops and Blouses',
            description: 'Wonderfully fitted',
            price: 250,
            image: '../img/item3.jpg'
        },
        {
            id: 4,
            name: 'Tshirt sleeker',
            description: 'Wonderfully fitted',
            price: 250,
            image: '../img/item4.jpg'
        }
    ];
    carts = [];
    currentCart = [];
    //-----------------------------------
    // Get Cart
    //-----------------------------------
    getCart = () => {
        let carts = this.carts;
        carts.map(item => {
            for (let i in this.products) {
                if (item.product_id === this.products[i].id) {
                    item.image = this.products[i].image;
                    item.name = this.products[i].name;
                    item.description = this.products[i].description;
                    item.price = this.products[i].price * item.quantity;
                }

            }
            return item;
        });
        this.currentCart = carts;
    };
    //-----------------------------------
    //  Remove from cart by id
    //---------------------------------------
    removeFromCart = id => {
        this.carts = this.carts.filter(item => {
            return item.product_id !== id
        });
        this.getCart();
    };

    //-----------------------------------
    //  Increase  quantity  product item by id
    //---------------------------------------
    increaseQuantityInCart = id => {
        this.carts.map(item => {
            if (item.product_id === id) {
                item.quantity++;
            }
            return item;
        });

        this.getCart();
    };
    //-----------------------------------
    //  Decrease  quantity  product item by id
    //---------------------------------------
    decreaseQuantityInCart = id => {
        this.carts.map(item => {
            if (item.product_id === id) {
                item.quantity--;
            }
            return item;
        });

        this.getCart();
    };


    //-----------------------------------
    //  Add to cart
    //---------------------------------------
    addToCart = id => {
        let found = false;

        this.carts.map(item => {
            if (item.product_id === id) {
                item.quantity++;
                found = true;
            }
            return item;
        });

        if(!found){
            this.carts.push({ product_id: id, quantity: 1});
        }

        this.getCart();

    };


}

export default Store;