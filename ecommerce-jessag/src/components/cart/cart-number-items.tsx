export default function CartNumberItems(props : any) {
    return (
        <div className="w-5 h-5 bg-custom-redIcons rounded-full flex justify-center items-center absolute" style={{right: '-10px', top: '50%'}}>
            <span className="text-xs text-white">
                {props.children}
            </span>
        </div>
    );
}