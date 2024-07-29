import React from "react";
import Topbar from "./Topbar";
import profile from "../assets/profile.png";
import "../css/signin.css";
import { useRef,useState } from "react";
import { Navigate } from "react-router-dom";

function ProfileContent()
{
    const [image , setImage] = useState("");
    const handleImageChange = (e) =>
    {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        getBase64(file).then((base64) =>
        {
            localStorage["image"] = base64 ;
        });
    };
    const [goToProfile , setGoToProfile] = useState(false);
    if (goToProfile)
    {
        return <Navigate to = "profile" />;
    }

    
    const [userSignin, setUserSignin] = useState({
        name : "",
        email : "",
        password : "",
        role : "",
        number : "",
        address : "",
        state : "",
        zipcode : ""
    });
    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserSignin({...userSignin , [name]:value});
    };
    const handleSigin = (e) =>
    {
        e.preventDefault();
        localStorage.setItem ("signin",JSON.stringify(userSignin));
        return setGoToProfile(true) ;
    }
    const getBase64 = (file) =>
    {
        return new Promise((resolve,reject) =>{
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onabort = (error) => reject(error)
            reader.readAsDataURL(file)
        })
    }
    return (
        <>
            <Topbar />
            <div className="grid-container">
                <form onSubmit={handleSigin}>
                    <div className="grid-item1">
                    <br />
                    {/* <img src = {profile} className = "image" alt = "dp" /> */}
                    {image ? <img src = {URL.createObjectURL(image)} alt = "dp" className="image"/> : <img src= {profile} alt = "pic" className = "image" id = "dp" /> }
                    <label htmlFor = "upload" ><i className="fa-solid fa-plus icon" ></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file" onChange={handleImageChange}/>
                </div>
                <div className="grid-item2">
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" onChange={handleInput} value = {userSignin.name} required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "abc@gmail.com" className="input1" name = "email" onChange={handleInput} value = {userSignin.email} required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" onChange={handleInput} value = {userSignin.password} required/>
                    <br /><br/>
                    <label htmlFor = "genre" className = "input">Role</label>
                    <br />
                    <input list = "genre" className = "input1" name = "role" onChange={handleInput} value = {userSignin.role} required /> <br /><br />
                    <datalist id = "genre">
                        <option value = "Admin User"></option>
                        <option value = "Normal User"></option>
                    </datalist>
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" onChange={handleInput} value = {userSignin.number}required />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" onChange={handleInput} value = {userSignin.address} required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" onChange={handleInput} value = {userSignin.state} required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" onChange={handleInput} value = {userSignin.zipcode} required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                    <button className = "signin" type="submit">Sign-in</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default ProfileContent;