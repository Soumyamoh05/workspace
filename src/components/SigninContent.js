import Topbar from "./Topbar";
import profile from "../assets/profile.png";
import "../css/signin.css";
import { useRef,useState } from "react";

function SigninContent()
{
    const input = useRef(null);
    const [image , setImage] = useState("");
    const handleImageChange = (e) =>
    {
        setImage(e.target.files[0]);
    };
    return(
        <>
            <Topbar />
            <div className="grid-container">
                <div className="grid-item1">
                    <br />
                    {image ? <img src = {URL.createObjectURL(image)} alt = "dp" className="image"/> : <img src= {profile} alt = "pic" className = "image" id = "dp" /> }
                    <label htmlFor = "upload" ><i className="fa-solid fa-plus icon" ></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" ref = {input} onChange={handleImageChange}/>
                </div>
                <div className="grid-item2">
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "abc@gmail.com" className="input1" required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" required/>
                    <br /><br/>
                    <label htmlFor = "genre" className = "input">Role</label>
                    <br />
                    <input list = "genre" className = "input1" required /> <br /><br />
                    <datalist id = "genre">
                        <option value = "Admin User"></option>
                        <option value = "Normal User"></option>
                    </datalist>
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" required />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                    <button className = "signin">Sign-in</button>
                </div>
            </div>
        </>
    )
}
export default SigninContent;