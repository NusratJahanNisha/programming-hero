import React from 'react';
import { Link } from 'react-router-dom';

const Monday = () => {

    const movieDetails = [{
        name: "THE ART OF THE STEAL",
        time: "10.00am - 1.00pm",
        image: "https://i.ibb.co/2cHMz0s/the-art-of-the-steal.jpg",
        day: "Monday",
        date: "21.12.2020"
    },
    {
        name: "TWILIGHT",
        time: "3.00pm - 6.00pm",
        image: "https://i.ibb.co/ynwwLsj/twilight.jpg"
    },
    {
        name: "ZOMBIELAND",
        time: "8.00pm - 11.00pm",
        image: "https://i.ibb.co/LQDjz8g/zomblieland.jpg"
    }]
    return (
        <div>
            <h1 style={{ marginTop: "80px", marginBottom: "40px", fontSize: "60px", padding: "10px" }} class="bg-danger">{movieDetails[0].date} ({movieDetails[0].day})</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card bg-warning ">
                        <div class="card-body " >
                            <h1 class="card-title">{movieDetails[0].time}</h1>
                        </div>
                    </div>
                    <div class="card">
                        <img style={{ height: "400px" }} src={movieDetails[0].image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{movieDetails[0].name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-warning" style={{ margin: "5px" }}>
                                <Link style={{ textDecoration: "none" }} to={`/seatBooking/${movieDetails[0].name}/${movieDetails[0].time}/${movieDetails[0].day}/${movieDetails[0].date}`}>
                                    Book Now</Link></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-warning ">
                        <div class="card-body " >
                            <h1 class="card-title">{movieDetails[1].time}</h1>
                        </div>
                    </div>
                    <div class="card">
                        <img style={{ height: "400px" }} src={movieDetails[1].image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{movieDetails[1].name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-warning" style={{ margin: "5px" }}>
                                <Link style={{ textDecoration: "none" }} to={`/seatBooking/${movieDetails[1].name}/${movieDetails[1].time}/${movieDetails[0].day}/${movieDetails[0].date}`}>
                                    Book Now</Link></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-warning ">
                        <div class="card-body " >
                            <h1 class="card-title">{movieDetails[2].time}</h1>
                        </div>
                    </div>
                    <div class="card">
                        <img style={{ height: "400px" }} src={movieDetails[2].image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{movieDetails[2].name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-warning" style={{ margin: "5px" }}>
                                <Link style={{ textDecoration: "none" }} to={`/seatBooking/${movieDetails[2].name}/${movieDetails[2].time}/${movieDetails[0].day}/${movieDetails[0].date}`}>
                                    Book Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monday;