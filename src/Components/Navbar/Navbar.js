import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav style={{ paddingLeft: "20px" }} class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img style={{ height: "40px" }} src="https://i.ibb.co/0jHs5JC/clapperboard.png" alt="" /> <b class="text-danger" style={{ fontSize: "30px" }}>Cinema Time</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"> <b> <button type="button" class="btn btn-outline-warning"> <Link style={{textDecoration:"none"}} to="/homePage">Home</Link> </button></b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"> <b> <button type="button" class="btn btn-outline-warning"> <Link  style={{textDecoration:"none"}} to="/movieList">Movie List</Link> </button></b> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"> <b> <button type="button" class="btn btn-outline-warning"> <Link style={{textDecoration:"none"}} to="/login">LogIn</Link> </button></b> </a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;