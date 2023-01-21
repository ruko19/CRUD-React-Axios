import React from 'react'

const CharactersCard = ({ name, img, id }) => {


    return (
        <>
            <div className='col-3 border'>
                <h3>{name}</h3>
                <img src={img} alt="" />


            </div>



        </>
    )
}

export { CharactersCard }
