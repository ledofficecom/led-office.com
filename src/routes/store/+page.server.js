//+page.server.js
import { getDataFromNotion } from "$lib/helpers/helper";
import productsStore from "$lib/store/productsStore";
export const prerender = 'auto'
export const load = async ({ }) => {

    /** @type {string | any[]}*/
    let products = []

    productsStore.subscribe((data) => {
        products = data;
    });

    if (products.length == 0) {
        await getDataFromNotion().then((data) => {
            // @ts-ignore
            productsStore.set(data);
            products = data;
        });
    }
    return {products}
}
