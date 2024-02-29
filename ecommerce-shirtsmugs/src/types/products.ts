export interface Products {
    name: string,
    price_in_cents: number,
    image_url: string,
    id: string,
    description?: string,
    category?: string,
    quantity?: number
}

export interface ProductFetchResponse {
    data: {
        Product: Products
    }
}

export interface CartItem {
    value: Products[];
}
