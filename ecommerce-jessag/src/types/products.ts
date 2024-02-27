export interface Products {
    name: string,
    price_in_cents: number,
    image_url: string,
    id: string,
    description?: string,
    category?: string
}

export interface ProductFetchResponse {
    data: {
        Product: Products
    }
}