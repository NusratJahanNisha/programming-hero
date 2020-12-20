import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';

const SeatBooking = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const { movieName, movieTime, movieDay, movieDate } = useParams();
    const [count, setCount] = useState(0);
    const handleCount = (seatNumber) => {
        console.log(seatNumber);
        if (count >= 10) {
            alert("You can't book more than 10 seats at a time.")
        }
        else {
            setCount(count + 1);
        }
    }
    const onSubmit = data => {

        const employeeDetails = { ...data }
        fetch(`https://obscure-fortress-92950.herokuapp.com/cinemaInfo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your cinema is booked successfully.")
                console.log(data);
            })
    }

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <Navbar></Navbar>
            <form style={{ backgroundColor: "grey" }} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{ fontSize: "40px" }}>About Your Cinema Info</h1>
                <input name="name" style={{ margin: '10px', marginLeft: "40px", marginTop: "0px", width: '400px', height: '40px', border: "white", padding: "15px" }} defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
                {errors.name && <span className="error" style={{ color: "red", margin: "5px" }} >Your name is required </span>} <br />

                <input name="movieName" style={{ margin: '10px', marginLeft: "40px", width: '400px', height: '40px', border: "white", padding: "15px" }} defaultValue={movieName} ref={register({ required: true })} placeholder="Your Movie Name" />
                {errors.movieName && <span className="error" style={{ color: "red", margin: "5px" }}> Your movie name is required</span>} <br />

                <input name="movieTime" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} defaultValue={movieTime} ref={register({ required: true })} placeholder="Your Movie Time" />
                {errors.movieTime && <span className="error" style={{ color: "red", margin: "5px" }}>Your education is required</span>}<br />

                <input name="movieDay" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} defaultValue={movieDay} ref={register({ required: true })} placeholder="Your Movie Day" />
                {errors.movieDay && <span className="error" style={{ color: "red", margin: "5px" }}>Your movie day is required</span>}<br />

                <input name="movieDate" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} defaultValue={movieDate} ref={register({ required: true })} placeholder="Your Movie Date" />
                {errors.movieDate && <span className="error" style={{ color: "red", margin: "5px" }}>Your movie date is required</span>}<br />

                <input name="totalSeats" style={{ margin: '10px', height: "40px", marginLeft: "40px", width: '400px', border: "white", padding: "15px" }} defaultValue={count} ref={register({ required: true })} placeholder="Your Total Seats" />
                {errors.totalSeats && <span className="error" style={{ color: "red", margin: "5px" }}>Your total seats is required</span>}<br />

                <input style={{ margin: '10px', width: '100px', marginLeft: "40px", height: '40px', color: "white", backgroundColor: "black" }} type="submit" /> <br />
            </form>

            {/* row-1 */}
            
            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount()}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S1</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S2</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S3</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S4</h4>
                    </div>
                </div>
            </div>

            {/* row-2 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S5</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S6</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S7</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S8</h4>
                    </div>
                </div>
            </div>

            {/* row-3 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S9</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S10</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S11</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S12</h4>
                    </div>
                </div>
            </div>

            {/* row-4 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S13</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S14</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S15</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S16</h4>
                    </div>
                </div>
            </div>

            {/* row-5 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S17</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S18</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S19</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S20</h4>
                    </div>
                </div>
            </div>

            {/* row-6 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S21</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S22</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S23</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S24</h4>
                    </div>
                </div>
            </div>

            {/* row-7 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S25</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S26</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S27</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S28</h4>
                    </div>
                </div>
            </div>

            {/* row-8 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S29</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S30</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S31</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S32</h4>
                    </div>
                </div>
            </div>

            {/* row-9 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S33</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S34</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S35</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S36</h4>
                    </div>
                </div>
            </div>

            {/* row-10 */}

            <div className="row">
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S37</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S38</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S39</h4>
                    </div>
                </div>
                <div className="col-md-3" style={{ padding: "20px", boxShadow: "3px 3px 3px 3px lightGrey" }}>
                    <div onClick={handleCount}>
                        <img style={{ height: "200px", width: "250px", padding: "10px" }} src="https://i.ibb.co/QPtmwwS/armchair.png" alt="" />
                        <h4>S40</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatBooking;