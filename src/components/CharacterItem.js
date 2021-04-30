import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt=''/ >
                </div>

                <div className='card-back'>
                    <h1> {item.name} </h1>

                    <ul>
                        <li>
                            <strong> Actor Name: </strong> {item.portrayed}
                        </li>

                        <li>
                            <strong> Actor Name: </strong> {item.nickname}
                        </li>

                        <li>
                            <strong> Actor Name: </strong> {item.birthday}
                        </li>

                        <li>
                            <strong> Actor Name: </strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
