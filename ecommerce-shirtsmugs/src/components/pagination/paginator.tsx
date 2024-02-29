import useFilter from "@/hooks/useFilter";
import NextIcon from "./button-next-icon";
import PreviewIcon from "./button-preview-icon";
import { useEffect } from "react";

export default function Paginator() {
    const { setPage, type, page } = useFilter();

    const handleNewPage = (pageSelected: number) => {
        setPage(pageSelected);
    };

    useEffect(() => {
        setPage(0);
    }, [type]);

    return (
        <div className="flex gap-1">
            <button
                onClick={(ev) => handleNewPage(Number(ev.currentTarget.textContent))}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                1
            </button>
            <button
                onClick={(ev) => handleNewPage(Number(ev.currentTarget.textContent))}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                2
            </button>
            <button
                onClick={(ev) => handleNewPage(Number(ev.currentTarget.textContent))}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                3
            </button>
            <button
                onClick={(ev) => handleNewPage(Number(ev.currentTarget.textContent))}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                4
            </button>
            <button
                onClick={(ev) => handleNewPage(Number(ev.currentTarget.textContent))}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                5
            </button>
            <button
                onClick={(ev) => handleNewPage(page == 0 ? 0 : page - 1)}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                <PreviewIcon />
            </button>
            <button
                onClick={(ev) => handleNewPage(page + 1)}
                className="w-8 p-1 bg-custom-bgBtnPaginator rounded-lg text-custom-textDark font-normal text-base hover:border hover:border-custom-borderBtnPaginator hover:text-custom-borderBtnPaginator">
                <NextIcon />
            </button>
        </div>
    );
};