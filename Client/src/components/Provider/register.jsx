import axios from 'axios';
import { useState, useEffect } from 'react';
import { BiArrowBack, BiCamera } from 'react-icons/bi';
import './register.css';

const ProviderRegister = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [Category, setCategory] = useState([])

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    setPreviewImage(URL.createObjectURL(image));
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/admin/categories")
      .then((res) => {
        setCategory(res.data.map((item) => item.categoryName));
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const [provider, setProvider] = useState({
    username: '',
    email: '',
    phone: '',
    location: '',
    address: '',
    pincode: '',
    category: '',
    experience: '',
    availability: '',
    languages: '',
    description: '',
    password: '',
    CPassword: ''
  });

  const handleGoBack = () => {
    onClose();
  };

  const onChange = (e) => {
    setProvider({ ...provider, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('username', provider.username);
      formData.append('email', provider.email);
      formData.append('phone', provider.phone);
      formData.append('location', provider.location);
      formData.append('address', provider.address);
      formData.append('pincode', provider.pincode);
      formData.append('category', provider.category);
      formData.append('experience', provider.experience);
      formData.append('availability', provider.availability);
      formData.append('languages', provider.languages);
      formData.append('description', provider.description);
      formData.append('password', provider.password);


      const response = await axios.post('http://localhost:8080/provider/register', formData);

      if (response.data.email) {
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
    <div className="Register-container">
      <div className="Register-center rounded-sm max-w-[800px] z-50 px-4 sm:px-0">
        <div className="flex justify-between items-center mb-5">
          <button className="top-0 relative left-5" onClick={handleGoBack}>
            <BiArrowBack size={20} />
          </button>
          <h1 className="text-2xl text-center">Provider Registration</h1>
          <div></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">Personal Details</div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={onChange}
                value={provider.username}
                type="text"
                name="username"
                id="floating_first_name"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600"
              >
                Username
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.email} type="text" name="email" id="floating_last_name" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Email</label>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.phone} type="text" name="phone" id="floating_first_name" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Mobile No.</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.location} type="text" name="location" id="floating_last_name" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Location</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.pincode} type="text" name="pincode" id="floating_last_name" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Pincode</label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input onChange={onChange} value={provider.address} type="text" name="address" id="floating_first_name" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Permenent Address</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.password} type="password" name="password" id="floating_password" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input onChange={onChange} value={provider.CPassword} type="password" name="Cpassword" id="floating_repeat_password" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Confirm password</label>
            </div>
          </div>

          <div className='mb-4'>job Details</div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full group mb-4">
              <select onChange={onChange} value={provider.category} name="category" id="floating_phone" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                <option value="">Choose Category</option>
                {Category.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Category</label>
            </div>
            <div className="relative z-0 w-full group mb-4">
              <input onChange={onChange} value={provider.experience} type="text" name="experience" id="floating_company" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Experience</label>
            </div>

            <div className="relative z-0 w-full  group mb-4">
              <input onChange={onChange} value={provider.availability} type="text" name="availability" id="floating_company" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Availability</label>
            </div>
            <div className="relative z-0 w-full  group mb-4">
              <input onChange={onChange} value={provider.languages} type="text" name="languages" id="floating_company" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Known Language</label>
            </div>

            <div className="relative z-0 w-full  group mb-4">
              <input onChange={onChange} value={provider.description} type="text" name="description" id="floating_company" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-white rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 z-10 ms-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">Job Description</label>
            </div>
            <div className="relative z-0 w-full  group mb-4">

              <div className="mb-5 flex items-center">
                <label htmlFor="profile_image" className="cursor-pointer">
                  <input
                    onChange={handleImageChange}
                    type="file"
                    id="profile_image"
                    accept="image/*"
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500">
                          <BiCamera size={20} />
                        </span>
                      </div>
                    )}
                    <span className="ml-3">Upload Image</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2 rounded bg-blue-950 text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegister;
