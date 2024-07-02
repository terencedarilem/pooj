class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'article
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour obtenir le total des articles dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour ajouter des articles au panier
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Méthode pour supprimer des articles du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les articles du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`ID: ${item.product.id}, Name: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }

    // Méthode pour obtenir le prix total de tous les articles dans le panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}
// Créer des produits
const product1 = new Product(1, "Apple", 0.5);
const product2 = new Product(2, "Banana", 0.3);
const product3 = new Product(3, "Orange", 0.8);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des articles au panier
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 5);

// Afficher les articles du panier
console.log("Panier initial :");
cart.displayItems();
console.log("Total Items:", cart.getTotalItems());
console.log("Total Price:", cart.getTotalPrice());

// Supprimer un article du panier
cart.removeItem(2);

// Afficher les articles du panier après suppression
console.log("Panier après suppression :");
cart.displayItems();
console.log("Total Items:", cart.getTotalItems());
console.log("Total Price:", cart.getTotalPrice());
