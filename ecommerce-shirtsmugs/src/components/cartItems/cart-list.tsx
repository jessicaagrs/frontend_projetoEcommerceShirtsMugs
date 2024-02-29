'use client';
import { Products } from "@/types/products";
import { formatPrice } from "@/utils/format-price";
import { ChangeEvent } from "react";
import DeleteItemCartIcon from "./delete-item-cart-icon";

interface CartListProps {
    product: Products;
    handleUpdateQuantity: (id: string, quantity: number) => void;
    handleDeleteItem: (id: string) => void;
}

export default function CartList({ product, handleUpdateQuantity, handleDeleteItem }: CartListProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value));
    };

    return (
        <div className="flex w-3/4 h-56 gap-8 mb-8 mt-8 bg-custom-bgCartItems rounded-lg max-[1280px]:flex-col max-[1280px]:h-auto max-[1280px]:w-full">
            <img className="max-h-full w-56 rounded-l-lg max-[1280px]:w-full" src={product.image_url} alt="" />
            <div className="flex flex-col justify-between my-5 mr-3 max-[1280px]:p-3">
                <div className="flex justify-between mb-3">
                    <h4 className="font-light text-lg text-custom-optionFilterByType max-[1280px]:text-xl">{product.name}</h4>
                    <button
                        aria-label="Delete"
                        onClick={() => handleDeleteItem(product.id)}>
                        <DeleteItemCartIcon />
                    </button>
                </div>
                <p className="font-normal text-xs text-custom-optionFilterByType text-wrap mb-5 max-[1280px]:text-base">{product.description}</p>
                <div>
                    <div className="flex justify-between items-center ">
                        <select
                            value={product.quantity}
                            onChange={handleChange}
                            className="w-16 rounded-lg bg-custom-bgSelectQuantity text-custom-textSelectQuantity p-1 outline-none border border-solid border-custom-textSelectQuantity">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <span className="font-semibold text-base text-custom-shapesDark mb-5 max-[1280px]:text-xl">{formatPrice(product.price_in_cents)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};