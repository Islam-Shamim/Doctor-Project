import React from 'react'

export default function RegistrationForm
    () {
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-semibold italic text-center'>Registration Form</h2>
            <form className='flex flex-col w-1/2 my-4 mx-auto'>
                <label>Patient Name : </label>
                <input type="text" placeholder='Enter patient name' className='border rounded-md bg-slate-100 p-2 my-2' name="name" required />
                <label>Father Name : </label>
                <input type="text" className='border rounded-md bg-slate-100 p-2 my-2' placeholder="Father's name" name="fname" required />
                <label>Mother Name : </label>
                <input type="text" className='border rounded-md bg-slate-100 p-2 my-2' placeholder="Mother's name" name="mname" required /><br />
                <div className='flex justify-between items-center'>
                    <label><span>Age : </span>
                        <input type="number" className='border rounded-md bg-slate-100 p-2 my-2' placeholder="Age" name="age" />
                    </label>
                    <br />
                    <label className='flex justify-between items-center'>
                        <span>Summary : </span>
                        <textarea className='border rounded-md bg-slate-100 p-2 my-2' placeholder="Write your opinion" name="summary" /></label>
                </div>
                <div>
                    <button className='btn btn-primary right-0'>Submit</button>
                </div>
            </form>
        </div>
    )
}
