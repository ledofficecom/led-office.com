import { writable } from "svelte/store";
import { countCartItems } from "../cart/shoppingCart";
const totalCartStore = writable(
    countCartItems()
)
export default totalCartStore