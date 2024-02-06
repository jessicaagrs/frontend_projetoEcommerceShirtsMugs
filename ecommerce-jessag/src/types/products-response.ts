import { Products } from "./products";

export interface ProductsFetchResponse {
    data: {
        allProducts: Products[]
    }
}