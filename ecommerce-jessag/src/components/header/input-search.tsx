import useFilter from "@/hooks/useFilter";

export default function InputSearch() {
    const {setSearch, search} = useFilter();

    console.log(search)

    return (
        <input
            type="search"
            name="search"
            id="search"
            className="w-80 py-3.5 px-5 font-normal leading-5 text-custom-textDark rounded-lg bg-custom-inputSearch outline-none"
            placeholder="Procurando por algo específico?"
            onChange={(event) => setSearch(event.target.value)} />
    );
}