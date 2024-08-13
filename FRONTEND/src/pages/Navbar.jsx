import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
return (
    <>
    <div className="flex justify-around m-5 border-2">
        <div>
            <h1>PG booking App</h1>
        </div>

        <div className="">
            <input placeholder="search for PG" className="border border-gray-300  pl-3" />
            <button className="p-3">Search</button>
        </div>

        <div className="">
            <button className="p-3 bg-gray-500 m-5">Sign-in</button>
            <button className="p-3 bg-gray-300 ">Register</button>
        </div>
    </div>
    <div>
        <ul className="flex justify-around border-2">
            <Link to={"/home"}><li className="p-3">Home</li></Link>
            <Link to={"/about"}><li className="p-3">About</li></Link>
            <Link to={"/contact"}><li className="p-3">Contact</li></Link>
            <Link to={"/services"}><li className="p-3">Services</li></Link>
            <Link to={"/gallery"}><li className="p-3">Gallery</li></Link>
      </ul>

        <div>
            <h1 className="flex justify-center p-5"> Our Services</h1>
            <div className="flex justify-around border-2">
                <div style={{ position: "relative" }}></div>
                    <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg" className="w-full" style={{ height: "450px", filter: "blur(2px)" }} alt="Service Image" />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2 style={{ color: "white", fontSize: "24px", textAlign: "center" }}>Manage all Pg and hotels in your pocket!!!</h2>
                    </div>
                </div>
            
        </div>
        </div>
    
    </>
);
}

export default Navbar;
