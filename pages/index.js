import React from 'react'
import Link from 'next/link'


const Home = () => {
    return (

        <div className={'footer'}>
            <div>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <h1 className="cursor-not-allowed">💻</h1>
                            <span className="ml-3 text-xl cursor-grab">Code . Hunn </span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link href='https://github.com/pawitanandsahare'  className=" cursor-pointer mr-5 hover:text-gray-900">Github</Link> 
                            <Link href='/about' className="cursor-pointer mr-5 hover:text-gray-900">About  ?</Link> 
                            <Link href='/contact' className="cursor-pointer mr-5 hover:text-gray-900">Contact </Link> 
                            <Link href='https://www.youtube.com/@PawitSahare' className="cursor-pointer mr-5 hover:text-gray-900">Youtube </Link>
                        </nav>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Go to Chat ?
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header>
            </div>

            <div className="bg-white p-3 justify-between X items-center md:p-16">


                <h1 className=" text-4xl font-mono text-center text-stone-900">
                    Code . Hunn 💻
                </h1>
                <p className="text-center m-0 p-8 text-base">Look At Me 👽</p>
                <div className="p-8 m-0 md:p-4 m-0 " >
                    <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"><h4 classNameName="text-2xl text-emerald-600">
                        Visit Web Hunn
                    </h4></button>
                    <p className="text-center m-12">Sroll And Visit</p>
                </div>
                <div className="m-20 bg-white">
                       <h1 className="cursor-pointer text-center text-neutral-500">About Me</h1>
                       <p className="cursor-pointer text-center md:m-8 p-8"> I am 13 Years Old Coders and I am ceo of code huntinner , And also i am app developer using React Native </p>
                </div>

            </div>
        </div>
    )
}

export default Home