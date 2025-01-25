"use client"

import { useState } from 'react';
import toast from 'react-hot-toast';


const IdentityForm = ({ onVerify }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [isVerifiedState, setIsVerifiedState] = useState(false);
    function isVerified(name, date) {
        const validNames = ["Tri", "tri", "Tri Haryanti", "tri haryanti"];
        const validDate = "2001-01-26";

        return validNames.includes(name) && date === validDate;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isVerified(name, date)) {
            setIsVerifiedState(true);
            onVerify(true);
        } else {
            toast.error('Nama sama tanggal lahir kamu salah nih');
            onVerify(false);
        }
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="bg-pink-100 p-6 rounded-xl shadow-md w-96" >
                    <div className='text-center text-pink-800'>
                        <h2 className='text-md font-bold'>Coba dicek dulu beneran kamu bukannn</h2>
                        <p className='text-md font-semibold'>diisi dulu yaaa</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-pink-700 font-bold mb-2">Nama Kamu</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Tri Haryanti'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-pink-700 font-bold mb-2">Tanggal Lahir Kamu</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Cek duluuu</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export { IdentityForm };
