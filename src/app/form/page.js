import React from 'react'

export default function RegistrationForm
    () {
    return (
        <div>
            <h2 className='text-2xl font-semibold italic text-center mt-8'>Registration Form</h2>

            <form className='flex flex-col my-4'>
                <label>Patient Name : </label><br/>
                <input type="text" placeholder='Enter patient name' className='border rounded-md bg-slate-100 p-2 mb-2' name="name" required/>
                <label>Father Name : </label><br/>
                <input type="text" className='border rounded-md bg-slate-100 p-2' placeholder="Father's name" name="fname" required/>
                <label>Mother Name : </label><br/>
                <input type="text" className='border rounded-md bg-slate-100 p-2' placeholder="Mother's name" name="mname" required/><br/>
            </form>
        </div>
    )
}
