import { formatPrice } from "@/utils/format-price";

interface ProductCard {
    image: string;
    name: string;
    price: number;
};

export default function ProductCard(props: ProductCard) {

    const price = formatPrice(props.price);

    return (
        <div className="flex items-center justify-center flex-col rounded backdrop-blur-md w-64">
            <img className="w-64 h-80" src={props.image} alt={props.name} />
            <div className="flex flex-col mt-3 gap-2">
                <h3 className="font-light text-base text-custom-textDarkIntense">{props.name}</h3>
                <div className="w-56 h-px bg-custom-shapesDivisor my-2"></div>
                <p className="font-semibold text-base text-custom-shapesDark">{price}</p>
            </div>
        </div>
    );
};