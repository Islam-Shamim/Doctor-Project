import Image from 'next/image'
import React from 'react'
import login from "./login.svg"
import Link from 'next/link'

export default function signIn() {
  return (
    <div className="md:flex justify-center items-center my-8">
      <div className="w-96 md:w-1/2 ml-12">
        <Image src={login} alt="login" className='text-center my-2'/>
      </div>
      <div className="w-full md:w-1/2 mt-4">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto md:mx-0">
          <h1 className="text-5xl font-bold mx-auto mt-4">Sign In now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
          <p className="ml-8 pb-4 text-blue-600">If you are new. Please{" "}
            <Link href={'#'} className="text-red-600">
              register
            </Link>.</p>
        </div>
      </div>
    </div>
  )
}
