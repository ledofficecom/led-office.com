export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
import { Client } from "@notionhq/client";

import { PRIVATE_API_KEY_NOTION, PRIVATE_DATABASE_ID } from '$env/static/private';

export async function getDataFromNotion() {

    const notion = new Client({
        auth: PRIVATE_API_KEY_NOTION
    })

    const query = { database_id: PRIVATE_DATABASE_ID  }

    const { results } = await notion.databases.query(query)
    let services = []
    let categories: never[] = []
    services = results.map(page => {
        // @ts-ignore
        const { properties } = page
        const { id, descripcion, nombre, imagen, categoria, precio } = properties
        // @ts-ignore
        categories = (categoria.select) ? [...categories, categoria.select.name] : categories
        return {
            id: id.unique_id.number,
            price: precio.number ?? null,
            name: (nombre.title && nombre.title.length > 0) ? nombre.title[0].plain_text : null,
            description: (descripcion.rich_text && descripcion.rich_text.length > 0) ? descripcion.rich_text[0].plain_text : null,
            image: imagen.files[0] ? imagen.files[0].file.url : "https://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg",
            category: (categoria.select) ? categoria.select.name : null,
        }
    })
    services = services.filter((service) => service.name !== null)
 
    categories = Array.from(new Set(categories));
    return {
        services,
        categories
    }
}