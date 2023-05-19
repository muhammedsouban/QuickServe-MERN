import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditService, UpdateService } from '../../../redux/Slice/serviceEditSlice';
import { BiArrowBack } from 'react-icons/bi';
import './addservice.css';

const EditServiceModel = ({ open, serviceId }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const dispatch = useDispatch();
    const service = useSelector((state) => state.editservice);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
                const response = await axios.get(`http://localhost:8080/admin/editService/${serviceId}`, { headers });
                dispatch(EditService({ field: 'image', value: response.data.image }));
                dispatch(EditService({ field: 'servicename', value: response.data.servicename }));
                dispatch(EditService({ field: 'category', value: response.data.category }));
                dispatch(EditService({ field: 'description', value: response.data.description }));
                dispatch(EditService({ field: 'serviceincludes', value: response.data.serviceincludes }));
                dispatch(EditService({ field: 'price', value: response.data.price }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [dispatch, serviceId]);

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setSelectedImage(image);
        setPreviewImage(URL.createObjectURL(image));
    };
    const handleGoBack = () => {
        open(false);
    };

    const onChange = (e) => {
        dispatch(EditService({ field: e.target.name, value: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { servicename, category, description, serviceincludes, price } = service;

        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('servicename', servicename);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('serviceincludes', serviceincludes);
            formData.append('price', price);

            const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
            const response = await axios.post(`http://localhost:8080/admin/update-Service/`, formData, { headers });

            if (response.data) {
                dispatch(UpdateService()); // Dispatch the UpdateService action
                window.location.reload();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="center bg-white max-w-[400px] sm:w-1/2 z-50">
                <div className='flex justify-between '>
                    <button className='top-0 relative left-5' onClick={handleGoBack}><BiArrowBack size={20} /></button>
                    <h1 className='text-2xl text-center'>Edit Services</h1>
                    <div></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="profile flex justify-center py-4">
                        {previewImage ? (
                            <img src={previewImage} className="profile_img" alt="Service" />
                        ) : (
                            <img src={`http://localhost:8080/public/images/${service.image}`} className="profile_img" alt="Service" />
                        )}
                    </div>

                    <div className="txt_field">
                        <input
                            type="text"
                            title="Please enter Service Name"
                            name="servicename"
                            value={service.servicename}
                            onChange={onChange}
                            required
                        />
                        <label>Service Name</label>
                    </div>
                    <div className="txt_field">
                        <select className='select-field' value={service.category} name='category' onChange={onChange}>
                            <option value="">Choose Category</option>
                            <option value="Plumber">Plumber</option>
                            <option value="Carpenter">Carpenter</option>
                            <option value="Barber">Barber</option>
                        </select>
                    </div>
                    <div className="txt_field">
                        <textarea
                            title="Please enter description"
                            name="description"
                            value={service.description}
                            onChange={onChange}
                            required
                        ></textarea>
                        <label>Description</label>
                    </div>
                    <div className="txt_field">
                        <textarea
                            id="includes"
                            name="serviceincludes"
                            value={service.serviceincludes}
                            onChange={onChange}
                            required
                        ></textarea>
                        <label>Service Includes</label>
                    </div>

                    <div className="txt_field">
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={service.price}
                            onChange={onChange}
                            required
                        />
                        <label>Price</label>
                    </div>
                    <div className="txt_field">
                        <input type="file" id="image" name="image" onChange={handleImageChange} required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm mb-5 py-2.5 text-center ">UPDATE SERVICE</button>
                </form>
            </div>
        </div>
    );
};

export default EditServiceModel;