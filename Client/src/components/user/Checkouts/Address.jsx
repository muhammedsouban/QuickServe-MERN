import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { getAddress } from '../../../Api/userAPI';

const Address = ({ onClose, shedule, map, onSelectAddress }) => {
    const [address, setAddress] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState([]);

    const handleGoBack = () => {
        shedule();
        onClose();
    };

    const selectAddress = address
        .filter((address) => address.id === selectedAddress)

    const proceed = () => {
        const selected = address.find((addr) => addr.id === selectedAddress);
        if (selected) {
            onSelectAddress(selectAddress);
            shedule();
            onClose();
        } else {
            toast.error('Please select an address.');
        }
    };

    const addAddress = () => {
        map();
        onClose();
    };

    const headers = { Authorization: `Bearer ${localStorage.getItem('userToken')}` };

    useEffect(() => {
        try {
            getAddress(headers).then((res) => {
                setAddress(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div className="center bg-white max-w-[400px] sm:w-1/2 z-50">
                <div className="flex justify-between">
                    <button className="top-0 relative left-5" onClick={handleGoBack}>
                        <BiArrowBack size={20} />
                    </button>
                    <h1 className="text-2xl text-center">Saved Address</h1>
                    <div></div>
                </div>
                <div className="flex">
                    <div className="grid h-fit w-full grid-cols-1 mx-8">
                        <div onClick={addAddress} className="w-full mb-3 border-b-[1px]  border-gray-400">
                            <h2 className="mb-2">+ Add Address</h2>
                        </div>
                        <div className="overflow-y-auto max-h-[250px]">
                            {address.map((address) => (
                                <div key={address.id} className="w-full mb-3 border-b-[1px] border-gray-400 ">
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            name="address"
                                            checked={selectedAddress === address.id}
                                            onChange={() => setSelectedAddress(address.id)}
                                        />
                                        <h2 className="ml-2">{address.house}, {address.landmark}</h2>
                                    </div>
                                    <h2 className="ml-5 text-gray-500 mb-2">{address.address}</h2>
                                </div>
                            ))}
                            
                        </div>

                    </div>
                </div>
                <div className="flex">
                    <button
                        onClick={proceed}
                        type="submit"
                        className="w-full mx-8 text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm mb-5 py-2.5 text-center"
                    >
                        PROCEED
                    </button>
                </div>
            </div>
        </>
    );
};

export default Address;
