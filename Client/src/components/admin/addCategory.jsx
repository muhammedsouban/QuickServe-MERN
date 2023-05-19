import axios from 'axios';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const AddCategoryModel = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    setPreviewImage(URL.createObjectURL(image));
  };

  const handleGoBack = () => {
    onClose();
  };

  const onChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('categoryName', categoryName);

      const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

      const response = await axios.post(
        'http://localhost:8080/admin/Add-Category/',
        formData,
        { headers }
      );

      if (response.data) {
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
        <div className="flex justify-between ">
          <button className="top-0 relative left-5" onClick={handleGoBack}>
            <BiArrowBack size={20} />
          </button>
          <h1 className="text-2xl text-center">Add Category</h1>
          <div></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="profile flex justify-center py-4">
            <img src={previewImage} className="profile_img" alt="Service" />
          </div>

          <div className="txt_field">
            <input
              type="text"
              title="Please enter Category Name"
              name="categoryName"
              value={categoryName}
              onChange={onChange}
              required
            />
            <label>Category Name</label>
          </div>

          <div className="txt_field">
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm mb-5 py-2.5 text-center "
          >
            ADD CATEGORY
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModel;
