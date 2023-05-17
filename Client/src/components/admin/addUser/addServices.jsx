import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { ServiceAction } from '../../../redux/action/serviceAction';
import './addservice.css'

const AddServiceModel = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    setPreviewImage(URL.createObjectURL(image));
  };

  const service = useSelector((state) => state.Service);
  const APIURL = useSelector((state) => state.APIURL.url);
  const dispatch = useDispatch();
  const handleGoBack = () => {
    onClose();
  };
  const onChange = (e) => {
    dispatch(ServiceAction(e.target.name, e.target.value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('servicename', service.servicename);
      formData.append('description', service.description);
      formData.append('serviceincludes', service.serviceincludes);
      formData.append('price', service.price);
      const response = await axios.post(`${APIURL}/admin/Add-Service/`, formData);
      if (response.data) {
        window.location.reload()
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
          <h1 className='text-2xl text-center'>Add Services</h1>
          <div></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="profile flex justify-center py-4">
            <img src={previewImage} className="profile_img" alt="Service" />
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
          <button type="submit" className="w-full text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm mb-5 py-2.5 text-center ">ADD SERVICE</button>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModel;
