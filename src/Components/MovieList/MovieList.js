import React from 'react';
import Navbar from '../Navbar/Navbar';
import Friday from './Friday';
import Monday from './Monday';
import Saturday from './Saturday';
import Sunday from './Sunday';
import Thursday from './Thursday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';

const MovieList = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Monday></Monday>
            <Tuesday></Tuesday>
            <Wednesday></Wednesday>
            <Thursday></Thursday>
            <Friday></Friday>
            <Saturday></Saturday>
            <Sunday></Sunday>
        </div>
    );
};

export default MovieList;