import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const EditCategoryModel = ({ open, Id }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [categoryname, setCategoryname] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);


    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setSelectedImage(image);
        setPreviewImage(URL.createObjectURL(image));
    };

    const handleGoBack = () => {
        open(false);
    };
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    useEffect(() => {
        axios.get(`http://localhost:8080/admin/edit-category/${Id}`, { headers }).then((res) => {
            setCategoryname(res.data.categoryName);
            setCategoryImage(res.data.image)
        });
    }, []);

    const onChange = (e) => {
        setCategoryname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          if (selectedImage) {
            formData.append('image', selectedImage);
          }
          formData.append('categoryName', categoryname);
          const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
          const response = await axios.put(
            `http://localhost:8080/admin/update-Category/${Id}`,
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
                    <h1 className="text-2xl text-center">Edit Category</h1>
                    <div></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="profile flex justify-center py-4">
                        {previewImage ? (
                            <img src={previewImage} className="profile_img" alt="Service" />
                        ) : (
                            <img src={`http://localhost:8080/public/images/${categoryImage}`} className="profile_img" alt="Service" />
                        )}
                    </div>

                    <div className="txt_field">
                        <input
                            type="text"
                            title="Please enter Category Name"
                            name="categoryName"
                            value={categoryname}
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
                        UPDATE CATEGORY
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCategoryModel;
