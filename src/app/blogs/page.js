import React from 'react'
import bg1 from "./even1.jpg"
import bg2 from "./morn1.jpg"
import bg3 from "./v1.jpg"
import Image from 'next/image'

export default function Blogs() {
    return (
        <div className='my-8'>
            <section className='text-center space-y-2'>
                <h2 className='text-4xl font-semibold mt-4 text-red-400'>Blogs</h2>
                <h4 className='text-xl'>Here, you can get every update about our specialist.</h4>
                <hr className='mx-4 font-bold' />
            </section>
            <section className="my-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg1}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg2}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg3}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg2}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg1}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <figure className="p-4">
                            <Image
                                src={bg3}
                                alt="blog1"
                                className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
