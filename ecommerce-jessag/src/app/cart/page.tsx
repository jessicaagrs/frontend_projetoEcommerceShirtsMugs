'use client';
import CartList from "@/components/cartItems/cart-list";
import CartResult from "@/components/cartItems/cart-result";
import ButtonBackPageIcon from "@/components/productDetails/button-back-page-icon";
import DefaultProvider from "@/contexts/default/defaultProvider";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CartItem, Products } from "@/types/products";
import { formatPrice } from "@/utils/format-price";

export default function Cart() {
    const { value, updateLocalStorage } = useLocalStorage('cart-items', []);

    const calculateTotal = (value: Products[]) => {
        return value.reduce((sum, item) => sum += (item.quantity != null ? item.price_in_cents * item.quantity : 0), 0);
    };

    const cardTotal = calculateTotal(value);

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue: any = value.map((item: Products) => {
            if (item.id !== id) return item;
            return { ...item, quantity: quantity };
        });
        updateLocalStorage(newValue);
    };

    const handleDeleteItem = (id: string) => {
        const newValue: any = value.filter((item: Products) => {
            if (item.id !== id) return item;
        });
        updateLocalStorage(newValue);
    };

    return (
        <DefaultProvider>
            <main className="py-5 px-40  min-h-screen flex gap-3 bg-custom-bgMain max-[800px]:px-12">
                <section>
                    <ButtonBackPageIcon path="/" />
                    <h2 className="uppercase font-medium text-2xl my-3.5 text-custom-optionFilterByType">Seu carrinho</h2>
                    <span className="font-light text-base text-custom-optionFilterByType">{`Total (${value.length} produtos)`}</span>
                    <span className="font-medium text-base text-custom-optionFilterByType">{` ${formatPrice(cardTotal)}`}</span>
                    {value.map((product) => <CartList
                        product={product}
                        handleUpdateQuantity={handleUpdateQuantity}
                        handleDeleteItem={handleDeleteItem}
                    />
                    )}
                </section>
                <section>
                    <CartResult />
                </section>
            </main>
        </DefaultProvider>
    );
};