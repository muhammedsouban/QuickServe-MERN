import React, { useState } from 'react'
import ProviderRegister from './register'

function ProviderHome() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div>
            <h1 className='text-black text-3xl font-bold'>this is Providerhome</h1>
            <button
                className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleModal}
            >
                Register Now
            </button>
            {showModal && (
                <div className="modal-overlay">
                    <ProviderRegister title="Add Service" onClose={toggleModal}>
                    </ProviderRegister>
                </div>


            )}
        </div>
    )
}

export default ProviderHome