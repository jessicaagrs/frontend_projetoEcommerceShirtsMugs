import { formatPrice } from "@/utils/format-price";
import { useRouter } from "next/navigation";

interface ProductCard {
    image: string;
    name: string;
    price: number;
    id: string;
};

export default function ProductCard(props: ProductCard) {
    const router = useRouter();

    const handleNavigateToProductDetails = () => {
        router.push("/product?id=" + props.id);
    }

    const price = formatPrice(props.price);

    return (
        <div className="flex items-center justify-center flex-col rounded backdrop-blur-md w-64 cursor-pointer" onClick={handleNavigateToProductDetails}>
            <img className="w-64 h-80" src={props.image} alt={props.name} />
            <div className="flex flex-col mt-3 gap-2">
                <h3 className="font-light text-base text-custom-textDarkIntense">{props.name}</h3>
                <div className="w-56 h-px bg-custom-shapesDivisor my-2"></div>
                <p className="font-semibold text-base text-custom-shapesDark">{price}</p>
            </div>
        </div>
    );
};