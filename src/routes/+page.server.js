import productsStore from '../store/productsStore.js';

export const load = async ({ }) => {

    let products = []
    productsStore.subscribe(
        value => {
            products = value;
        }
    )
    return {
        products
    }

}
