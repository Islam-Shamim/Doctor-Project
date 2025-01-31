import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/BHkxrjc8/dp1.jpg"
                className="w-full min-h-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
          </div>
        </section>
        <section className="my-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>Doctor treatment involves diagnosing, managing, and curing illnesses through medical expertise, examinations, and prescribed interventions.y</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co.com/6dNMZ79/vg1.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co.com/C3sN6tvp/vg2.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co.com/6dNMZ79/vg1.jpg"
                  alt="Shoes"
                  className="rounded-xl h-50" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co.com/bgNbjBpt/d1.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co.com/3mLCSnhR/d2.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div><div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
