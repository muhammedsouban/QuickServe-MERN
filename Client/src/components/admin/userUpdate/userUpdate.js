import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../components/user/profileUpdate/profileUpdate.css';
import { UserUpdateAction } from '../../../redux/action/userUpdateAction';

const UserUpdate = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const user = useSelector((state) => state.UserUpdate);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const APIURL = useSelector((state) => state.APIURL.url);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch the user data only once when the component mounts
    useEffect(() => {
        const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
        axios
            .get(`${APIURL}/admin/editUser/${id}`, { headers })
            .then((response) => {
                // Update the redux store with the user data fetched from the API
                dispatch(UserUpdateAction('username', response.data.username));
                dispatch(UserUpdateAction('email', response.data.email));
                dispatch(UserUpdateAction('mobile', response.data.mobile));
                dispatch(UserUpdateAction('image', response.data.image));
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.message);
            });
    }, [APIURL, dispatch, id]);

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        console.log(image); // check if image exists
        if (image) {
            setSelectedImage(image);
            setPreviewImage(URL.createObjectURL(image));
        }
    };
    


    const onChange = (e) => {
        dispatch(UserUpdateAction(e.target.name, e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (selectedImage) {
                formData.append('image', selectedImage);
            }
            formData.append('username', user.username);
            formData.append('email', user.email);
            formData.append('mobile', user.mobile);
            formData.append('password', user.password);
            const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
            const response = await axios.put(`${APIURL}/admin/updateUser/${id}`, formData, { headers });
            if (response.data.email) {
                navigate('/adminHome');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };
    

    return (
        <div className="sign">
            <div className="center">
                <h1>Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="profile flex justify-center py-4">
                        {previewImage ? (
                            <img src={previewImage} className="profile_img" alt="Profile" />
                        ) : user && user.image ? (
                            <img src={`${APIURL}/public/images/${user.image}`} className="profile_img" alt="Profile" />
                        ) : (
                            <img src="/images/user.png" className="profile_img" alt="Profile" />
                        )}


                    </div>

                    <div className="txt_field">
                        <input
                            type="text"
                            title="Please enter a valid username"
                            name="username"
                            value={user.username}
                            onChange={onChange}
                            required
                        />
                        <label>Username</label>
                    </div>

                    <div className="txt_field">
                        <input
                            type="email"
                            title="Please enter a valid email"
                            name="email"
                            value={user.email}
                            onChange={onChange}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            value={user.mobile}
                            onChange={onChange}
                            required
                        />
                        <label>Mobile</label>
                    </div>
                    {/* <div className="txt_field">
            <input
              type="password"
              id="password"
              name="password"
              value={signup.password}
              onChange={onChange}
              required
            />
            <label>Password</label>
          </div> */}
                    <div className="txt_field">
                        <input type="file" id="image" name="image" onChange={handleImageChange} />
                    </div>
                    <input type="submit" value="Update" />


                </form>
            </div>
        </div>
    );
};

export default UserUpdate;
