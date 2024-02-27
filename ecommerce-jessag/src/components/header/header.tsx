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
        <header className="flex justify-between items-center py-5 px-40 max-[800px]:flex max-[800px]:flex-col max-[1024px]:gap-5">
            <a className={`${sairaStencil.className} text-custom-logo font-normal text-5xl text-nowrap max-[800px]:text-2xl`}>
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
