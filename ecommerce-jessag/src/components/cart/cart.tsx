import useLocalStorage from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import CartNumberItems from "./cart-number-items";

export default function Cart() {
    const { value } = useLocalStorage<string>('cart-items');
    
    return (
        <div className="relative">
            <CartIcon />
            {value !== null && value !== '' && <CartNumberItems>{value}</CartNumberItems>}
        </div>
    );
}

