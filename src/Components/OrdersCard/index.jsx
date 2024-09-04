import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;


    return (
        <div className=" flex justify-between items-center right-5 mb-3 border border-black italic bg-lime-40 rounded-lg w-80 h-50 p-4 ">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">02.09.24 </span>
                    <span className="font-light">{totalProducts} Articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">${totalPrice} </span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
                </p>

            </div>
        </div>

    )
}

export default OrdersCard;