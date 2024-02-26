import useLocalStorage from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import CartNumberItems from "./cart-number-items";

export default function Cart() {
    const { value } = useLocalStorage('cart-items', 0);
    
    return (
        <div className="relative">
            <CartIcon />
            {value > 0 && <CartNumberItems>{value}</CartNumberItems>}
        </div>
    );
}

