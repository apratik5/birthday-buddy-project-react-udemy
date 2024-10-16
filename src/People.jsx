import React from 'react'


const People = ({ name, age, image }) => {
    console.log(image);
    return (
        <article className='person'>
            <img src={image} alt={name} className='img' />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>

        </article>
    )
}

export default People
