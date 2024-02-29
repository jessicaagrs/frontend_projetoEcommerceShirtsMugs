'use client';
import ButtonAddCartIcon from "@/components/productDetails/button-add-cart-icon";
import ButtonBackPageIcon from "@/components/productDetails/button-back-page-icon";
import DefaultProvider from "@/contexts/default/defaultProvider";
import useProductDetails from "@/hooks/useProductDetails";
import { formatPrice } from "@/utils/format-price";

export default function Product(params: { searchParams: { id: string; }; }) {
    const { data } = useProductDetails(params.searchParams.id);

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items');
        if (cartItems) {
            let cartItemsArray = JSON.parse(cartItems);
            let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === params.searchParams.id);

            if (existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({ ...data, quantity: 1, id: params.searchParams.id });
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            localStorage.setItem('cart-items', JSON.stringify([
                { ...data, quantity: 1, id: params.searchParams.id }
            ]));
        }
    };

    return (
        <DefaultProvider>
            <main className="py-5 px-40  min-h-screen flex flex-col gap-3 bg-custom-bgMain max-[1280px]:px-12">
                <div>
                    <ButtonBackPageIcon path="/" />
                </div>
                <div className="flex gap-8 max-[1280px]:flex max-[1280px]:flex-col">
                    <section>
                        <img src={data?.image_url} alt="image product selected" />
                    </section>
                    <section className="flex flex-col justify-between w-96 max-[1280px]:w-auto max-[1280px]:gap-8">
                        <div className="flex flex-col gap-5">
                            <span className="font-normal text-base text-custom-optionFilterByType">{data?.category}</span>
                            <h2 className="font-light text-4xl text-custom-optionFilterByType">{data?.name}</h2>
                            <span className="font-semibold text-xl text-custom-shapesDark">{formatPrice(data?.price_in_cents)}</span>
                            <p className="font-normal text-xs text-custom-optionFilterByType">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-custom-textDark font-medium text-base">Descrição</h3>
                            <p className="text-custom-optionFilterByType font-normal text-sm">{data?.description}</p>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="h-11 rounded bg-custom-btnAddCart text-custom-btnTextAddCart uppercase flex items-center justify-center gap-3">
                            <ButtonAddCartIcon />
                            Adicionar ao carrinho
                        </button>
                    </section>
                </div>
            </main>
        </DefaultProvider>
    );
};