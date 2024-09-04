import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

function Home() {
    const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

    const renderView = () => {
        if (filteredItems?.length > 0) {
            return (
                <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg'>
                    {
                        filteredItems?.map(item => (

                            <Card key={item.id} data={item} />
                        ))
                    }
                </div>

            )
        } else {
            return (
                <>
                    {filteredItems ?
                        <>

                            <div
                                role="alert"
                                className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
                            >
                                <InformationCircleIcon className="h-5 w-5 flex-shrink-0 mr-2 text-blue-600" />
                                <p className="text-xs font-semibold">
                                    Info - No se encontraron coincidencias.
                                </p>
                            </div>


                        </>
                        : <>
                            <div className="w-full  flex justify-center items-center gap-x-4">
                                <div
                                    className="w-10 h-10 bg-[#d991c2] rounded-full animate-bounce"
                                ></div>
                                <div
                                    className="w-10 h-10 bg-[#9869b8] rounded-full animate-bounce"
                                ></div>
                                <div
                                    className="w-10 h-10 bg-[#6756cc] rounded-full animate-bounce"
                                ></div>
                            </div>

                        </>
                    }

                </>
            )
        }
    }


    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 ">
                <h1>Exclusive Products</h1>
            </div>
            <div className="relative rounded-lg w-80  mb-6 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                    type='text'
                    placeholder="Shearch a product"
                    onChange={(e) => setSearchByTitle(e.target.value)}
                    className="relative bg-transparent text-center ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-4  checked:bg-emerald-500 "
                />
            </div>

            {renderView()}

            <ProductDetail />
        </Layout>
    )
}

export default Home