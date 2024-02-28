import useLocalStorage from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import CartNumberItems from "./cart-number-items";
import { CartItem } from "@/types/products";
import { useRouter } from "next/navigation";

export default function Cart() {
    const { value }: CartItem = useLocalStorage('cart-items', []);
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/cart');
    };

    return (
        <div
            className="relative cursor-pointer"
            onClick={handleNavigation}>
            <CartIcon />
            {value.length > 0 && Array.isArray(value) && <CartNumberItems>{value.length}</CartNumberItems>}
        </div>
    );
}

