import React, { useEffect, useState } from 'react';
import './Team.css'

const Team = () => {
    const [person,setPerson] =useState([])
    useEffect(() =>{
        fetch(`../../../public/persons.JSON`)
        .then(res => res.json())
        .then(data => setPerson(data))
    },[])



    return (
        <div className='team'>
            <div className='team-container'>
                <h1>{console.log(person.length)} </h1>
            </div>




            <div className='cart-container'>
                <h2>New job office</h2>
            </div>
        </div>
    );
};

export default Team;