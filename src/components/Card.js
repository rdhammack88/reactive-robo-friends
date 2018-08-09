import React from 'react';

const Card = ({ id, name, email }) => {
    // const { id, name, email } = props
    return (
        // <h1>RoboFriends</h1>,
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            {/* <img src='https://robohash.org/63.143.42.243.png' alt='robots' />
            <div>
                <h2>John Doe</h2>
                <p>john.doe@email.com</p>
            </div>

            
            <img src='https://robohash.org/testtest?200x200' alt='robots' />
            <div>
                <h2>John Doe</h2>
                <p>john.doe@email.com</p>
            </div>
            <img src='https://robohash.org/test?200x200' alt='robots' />
            <div>
                <h2>John Doe</h2>
                <p>john.doe@email.com</p>
            </div> */}
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;