import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProviderCard = () => {
    const [providers, setProviders] = useState([]);

    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

    const handleApprove = (providerId) => {
        axios
            .put(`http://localhost:8080/admin/approve/${providerId}`, {}, { headers })
            .then((res) => {
                if (res) {
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleBlock = (providerId) => {
        axios
            .put(`http://localhost:8080/admin/block/${providerId}`, {}, { headers })
            .then((res) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleUnblock = (providerId) => {
        axios
            .put(`http://localhost:8080/admin/unblock/${providerId}`, {}, { headers })
            .then((res) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/getprovider', { headers })
            .then((res) => {
                setProviders(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="container ms-80 px-6 py-4 mx-auto">
            <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
                {providers.map((provider) => (
                    <div
                        key={provider._id}
                        className="flex items-center p-4 border-2 border-gray-200 rounded-lg shadow-sm bg-white"
                    >
                        <div id="body" className="flex flex-col ml-5">
                            <div className="flex items-center">
                                <img
                                    alt="avatar"
                                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                                    src="https://picsum.photos/seed/picsum/200"
                                />
                                <h4 id="name" className="text-xl ml-5 font-semibold">
                                    {provider.username}
                                </h4>
                            </div>
                            <div className="flex">
                                <div>
                                    <p id="job" className="text-blue-900 mt-2">
                                        email: {provider.email}
                                    </p>
                                    <p id="job" className="text-blue-900 mt-2">
                                        phone: {provider.phone}
                                    </p>
                                    <p id="job" className="text-blue-900 mt-2">
                                        location: {provider.location}
                                    </p>
                                </div>
                                <div className="ms-10">
                                    <p id="job" className="text-blue-900 mt-2">
                                        category: {provider.category}
                                    </p>
                                    <p id="job" className="text-blue-900 mt-2">
                                        experience: {provider.experience}
                                    </p>
                                    <p id="job" className="text-blue-900 mt-2">
                                        joined On: {provider.joinedon}
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-4">
                       
                            {!provider.isApproved && !provider.isBlock && (
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleApprove(provider._id)}
                                >
                                    Approve
                                </button>
                            )}
                            {provider.isApproved && !provider.isBlock && (
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleBlock(provider._id)}
                                >
                                    Block
                                </button>
                            )}
                            {provider.isBlock && (
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleUnblock(provider._id)}
                                >
                                    Unblock
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default ProviderCard;
