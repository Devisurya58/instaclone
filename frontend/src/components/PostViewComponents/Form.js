import React, { useState } from 'react';
import '../../stylecss/form.css';
import Header from './Header';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {apiBaseUrl} from './BaseApiUrl'
const Form = () => {
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
    const togglepost = async () => {
        const date = new Date();
        let fullDate = date.toString();
        fullDate = fullDate.slice(4, 15);
        await axios.post(apiBaseUrl+'/postview', {
            name: author,
            location: location,
            likes: 30,
            description: description,
            PostImage: image,
            date: fullDate
        }).then(() => {
            alert('Success')
        }).catch((error) => {
            alert('failed')
        }).finally(()=>{
            navigate('/postview')
        })
    };
    const togglefile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const imageUrl = event.target.result;
            setImage(imageUrl);
        };
        reader.readAsDataURL(file);
    };

    const toogleauthor = (e) => {
        setAuthor(e.target.value);
    };

    const togglelocation = (e) => {
        setLocation(e.target.value);
    };

    const toggledescription = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div>
            <center>
                <Header />
                <div className='form-container'>
                    <div>
                        <input onChange={togglefile} type='file' />
                    </div>
                    <span>
                        <input
                            onChange={toogleauthor}
                            type='text'
                            className='authorip'
                            placeholder='Author'
                        />
                    </span>
                    <span>
                        <input
                            type='text'
                            onChange={togglelocation}
                            className='locationip'
                            placeholder='Location'
                        />
                    </span>
                    <div>
                        <input
                            type='text'
                            onChange={toggledescription}
                            className='descriptionip'
                            placeholder='Description'
                        />
                    </div>
                    <button onClick={togglepost}>Post</button>
                </div>
            </center>
        </div>
    );
};
export default Form;
