import React from 'react'
import { CharactersCard } from './CharactersCard'

const ListMotosCycle = ({ list }) => {
    return (
        <>
            <div className='container'>
                <h2>lista de personajes</h2>
                <div className='row'>
                    <div className='d-flex flex-wrap '>

                        {
                            list.map(e => (
                                <CharactersCard
                                    key={e.id}
                                    name={e.name}
                                    img={e.image}


                                />
                            ))
                        }
                    </div>

                </div>

            </div>


        </>
    )
}

export { ListMotosCycle }
