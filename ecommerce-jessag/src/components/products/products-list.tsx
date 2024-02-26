'use client';
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./product-card";

export default function ProductsList() {
    const { data } = useProducts();

    return (
        <div className="grid grid-cols-customGridRows gap-8 max-w-full">{data?.map((product) => <ProductCard
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price_in_cents} />)}
        </div>
    );
};


