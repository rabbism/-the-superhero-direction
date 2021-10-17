import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    console.log(props.person)
    const {name,age,country,image,experience,salary} =props.person;


    return (
        <div className='person'>
           <img src={image} alt="" />
           <h5>Name :{name}</h5>
           <p>Age:{age}</p>
           <p>Salary:${salary}</p>
           <p>Country:{country}</p>
           <p>Experience:{experience}</p>
           <button onClick={() =>props.handelToCart(props.person)}>{element}Add group</button> 
        </div>
    );
};

export default Person;