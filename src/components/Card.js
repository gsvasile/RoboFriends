import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib border br4 pa2 ma2 grow bw2 shadow-3 tc f4'>
            <img alt='robots' src={`https://robohash.org/${id}?10x10`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;