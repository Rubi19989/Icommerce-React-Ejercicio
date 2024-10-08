import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

// const Card = (data) => {
//     const { setCount, count } = useContext(ShoppingCartContext);

//     return (
//         <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
//             <figure className='relative mb-2 w-full h-4/5'>
//                 <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
//                 <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
//                 <div
//                     className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
//                     onClick={() => setCount(count + 1)}
//                 >
//                     <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
//                 </div>
//             </figure>
//             <p className='flex justify-between'>
//                 <span className='text-sm font-light'>{data.data.title}</span>
//                 <span className='text-lg font-medium'>${data.data.price}</span>
//             </p>
//         </div>
//     )
// }

// export default Card

const Card = (data) => {
    const { 
        setCount,
        count,
        setCartProducts,
        cartProducts,
        openCheckoutSideMenu,
        closeProductDetail,
        openProductDetail,
        setProductToShow
    } = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
        closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card