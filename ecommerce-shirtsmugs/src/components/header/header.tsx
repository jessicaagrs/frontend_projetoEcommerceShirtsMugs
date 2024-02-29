'use client';
import { Saira_Stencil_One } from "next/font/google";
import InputSearch from "./input-search";
import InputSearchIcon from "./input-search-icon";
import Cart from "../cart/cart";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
    weight: '400',
    subsets: ["latin"]
});

export default function Header() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/');
    };

    return (
        <header className="flex justify-between items-center py-5 px-40 max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:gap-5">
            <a
                onClick={handleNavigation}
                className={`${sairaStencil.className} text-custom-logo font-normal cursor-pointer text-5xl text-nowrap max-[1280px]:text-2xl`}>
                T-Shirt & Mugs
            </a>
            <div className="relative w-80">
                <InputSearch />
                <InputSearchIcon />
            </div>
            <div>
                <Cart />
            </div>
        </header>
    );
};
