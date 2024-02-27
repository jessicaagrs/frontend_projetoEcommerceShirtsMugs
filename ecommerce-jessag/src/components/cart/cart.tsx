import useLocalStorage from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import CartNumberItems from "./cart-number-items";
import { CartItem } from "@/types/products";

export default function Cart() {
    const { value }: CartItem = useLocalStorage('cart-items', []);

    return (
        <div className="relative">
            <CartIcon />
            {value.length > 0 && Array.isArray(value) && <CartNumberItems>{value.length}</CartNumberItems>}
        </div>
    );
}

