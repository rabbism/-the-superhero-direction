import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Team.css'

const Team = () => {
    const [person,setPerson] =useState([])
    useEffect(() =>{
        fetch('./persons.JSON')
        .then(res => res.json())
        .then(data => setPerson(data))
    },[])
    const[cart,setCart] =useState([])
    const handelToCart = person =>{
        const newPerson =[...cart,person]
        setCart(newPerson)

    }


    return (
        <div className='team'>
            <div className='team-container'>
                {
                    person.map(person => <Person handelToCart={handelToCart} person ={person}></Person>)
                }
            </div>




            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;