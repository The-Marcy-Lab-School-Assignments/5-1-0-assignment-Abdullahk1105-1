import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {

    #cartItems
    static #allCarts  = []

    constructor(){
    this.id = getId()
    this.#cartItems = []
    ShoppingCart.#allCarts.push(this);
    }

    

    createItem(name, price){
        const newItem = new CartItem(name, price);
        this.#cartItems.push(newItem);
        return newItem;

        // return [...this.#cartItems]
    }
    getItems() {
        return [...this.#cartItems];
    }
    removeItem(id) {
        this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1);
    }
    getTotal() {
        return this.#cartItems.reduce((total, item) => total + item.price, 0);
    }
    static listAll(){
        return [...ShoppingCart.#allCarts]
    }
    static findBy(id) {
        return ShoppingCart.#allCarts.find((cart) => cart.id === id);
      }

}


export default ShoppingCart;