import './HomePage.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-background">
            <Navbar></Navbar>
            <h1 style={{ color: "yellow", fontSize: "70px", paddingTop: "200px" }}>Cinema time</h1>
            <button type="button" class="btn btn-warning" style={{ margin: "5px" }}> <Link style={{ textDecoration: "none" }} to="movieList">Movie List</Link> </button>
            <button type="button" class="btn btn-outline-warning"> <Link style={{ textDecoration: "none" }} to="/login">LogIn</Link> </button>
        </div>
    );
};

export default HomePage;