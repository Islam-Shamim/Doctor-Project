import React from 'react'
import Image from 'next/image'
import about1 from './about1.jpg'
import about2 from './about2.jpg'
export default function AboutPage() {
    return (
        <div className='my-4'>
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl my-8">
                <div className="md:w-1/2 relative" >
                    <Image className="rounded w-5/6" src={about1} alt="Movie" />
                    <Image className="rounded w-1/2 absolute right-5 bottom-10 p-2  bg-slate-100" src={about2} alt="Movie" />
                </div>
                <div className="space-y-4 text-center md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-orange-600">About Us</h2>
                    <h1 className="text-4xl font-bold md:w-4/5 text-center">
                        We are qualified & experience in this field.
                    </h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        recusandae numquam aliquid reiciendis sit quidem ratione, tempora
                        consectetur maxime amet fugiat aperiam atque doloremque temporibus!
                        Nam quisquam totam maxime laudantium.
                    </p>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo
                        odio veritatis enim illo quos quidem sit officia earum ipsa?
                    </p>
                    <div>
                        <button className="btn btn-secondary">Get More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
