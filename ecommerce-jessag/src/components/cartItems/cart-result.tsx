interface CartResult {

};

type CartResultProps = {

};

export default function CartResult() {
    return (
        <div className="flex flex-col justify-between w-96 bg-custom-bgCartItems h-custom-cart-result p-4">
            <div>
                <h3 className="uppercase text-custom-textDark font-semibold mb-6">Resumo do pedido</h3>
                <div className="flex justify-between">
                    <span className="font-normal text-custom-textDark text-base">Subtotal de produtos</span>
                    <span className="font-normal text-custom-textDark text-base">R$ 161,00</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-normal text-custom-textDark text-base">Entrega</span>
                    <span className="font-normal text-custom-textDark text-base">R$ 40,00</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-base text-custom-textDark">Total</span>
                    <span className="font-semibold text-base text-custom-textDark">R$ 201,00</span>
                </div>
                <div className="h-px bg-custom-shapesDivisor mb-5"></div>
                <button className="uppercase bg-custom-textBtnBuy text-custom-bgCartItems w-custom-cart-result h-10">Finalizar a compra</button>
            </div>
            <ul>
                <li className="uppercase font-medium text-custom-textDark text-sm underline cursor-pointer mb-1">Ajuda</li>
                <li className="uppercase font-medium text-custom-textDark text-sm underline cursor-pointer mb-1">Reembolsos</li>
                <li className="uppercase font-medium text-custom-textDark text-sm underline cursor-pointer mb-1">Entregas e Frete</li>
                <li className="uppercase font-medium text-custom-textDark text-sm underline cursor-pointer">Trocas e Devoluções</li>
            </ul>
        </div>
    );
};