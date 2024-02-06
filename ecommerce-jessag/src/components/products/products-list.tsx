'use client'
import { useProducts } from "@/hooks/useProducts";

interface ProductsList {

};

type ProductsListProps = {

};

export default function c() {
    const { data } = useProducts();

    return (
        <div></div>
    )
};


