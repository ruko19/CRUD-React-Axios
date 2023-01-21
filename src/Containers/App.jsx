import { React, useState, useEffect } from 'react';
import { ListMotosCycle } from '../Components/ListMotosCycle';
import { getCharacter } from '../Api/api';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getCharacter();
      setData(res.data.results);
      console.log(res.data.results);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App container-fluid ">
      <>
        <h1 className='text-center '>Listado de Motos</h1>

        <ListMotosCycle list={data} />

      </>

    </div>
  )
}

export { App }
