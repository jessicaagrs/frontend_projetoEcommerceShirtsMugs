'use client';
import { Saira_Stencil_One } from "next/font/google";
import InputSearch from "./input-search";
import InputSearchIcon from "./input-search-icon";
import Cart from "../cart/cart";

const sairaStencil = Saira_Stencil_One({
    weight: '400',
    subsets: ["latin"]
});
export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 px-40">
            <a className={`${sairaStencil.className} text-custom-logo font-normal text-5xl`}>
                Ecommerce
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
