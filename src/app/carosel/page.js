import Image from 'next/image'
import React from 'react'
import dc1 from "../../photo/dc5.jpg"
import dc2 from "../../photo/dc1.jpg"
import dc3 from "../../photo/dc2.jpg"
import dc4 from "../../photo/dc4.jpg"
import dc5 from "../../photo/diet1.jpg"
import dc6 from "../../photo/tour1.jpg"


export default function CarouselPage() {
  return (
    <div className="carousel w-full h-[600px] mb-8 rounded">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={dc1} className="w-full h-[600px]" alt="cover photo1"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-4 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
  7     </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={dc2} className="w-full h-[600px]" alt="cover photo2"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={dc3} className="w-full h-[600px]" alt="cover photo3"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space7y-4 mt-8 ">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image src={dc4} className="w-full h-[600px]" alt="cover photo4"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <Image src={dc5} className="w-full h-[600px]" alt="cover photo5"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <Image src={dc6} className="w-full h-[600px]" alt="cover photo6"/>
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}
