import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function ParkingComponent() {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/sample`, {
      params: {
        table: 'sample',
      },
    }).then((response) => {
      setPlanets(response.data)
    })
  }, [])



  return (
    <div>
      {planets.map(row => (
        <div key={row.name}>
          {row.name} {row.id}
          <br />
        </div>
      ))}
    </div>
  );
}