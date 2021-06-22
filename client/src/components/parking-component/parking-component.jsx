import React, { useState, useEffect } from 'react';
import axios from 'axios';

const maxLength = 5;
// let defValue = [
//   [1, 1],
//       [1, 1, 1, 1, 1],
//       [1, 1, 1, 1, 1],
//       [1, 1, 1],
//       [1, 1, 1, 1, 1],
//       [1, 1, 1],
// ];

let defValue = [
  [1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1],
];



export function ParkingComponent() {

  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  let isSpace = false;
  

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/sample`, {
      params: {
        table: 'sample',
      },
    }).then((response) => {
      // console.log(response.data[0]["parking_value"]);
      // defValue = response.data[0]["parking_value"];
      // console.log("defValue = ", response.data[0]["parking_value"])

      
    })
  })

  defValue.map((row, i) => {
    row.map((item, j) => {
      if( item == 0 ) {
        isSpace = true;
      }
    })

  });

  const findFindSpot = (index, side) => {
    
    let tempValue = [
      [1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1],
    ];
  
    defValue.map((row, i) => {
      row.map((item, j) => {
        if( item == 0 ) {
          if( side == 1 ) {
            tempValue[i][j] = Math.abs(index - i) + j + 1
          } else {
            tempValue[i][j] = Math.abs(index - i) + maxLength - j;
          }
        } else {
          tempValue[i][j] = 10000000;
        }
        
      })
  
    });

     
    let min = tempValue[0][0];
    tempValue.map((row, i) => {
      row.map((item, j) => {
        if( item <= min ) {
          min = item;
          setX(i)
          setY(j)
        }
      })
    });

  }
  

  return (
    <div>
      {/* This is a sample component
      {callServer()} */}

      <h2 className="title">Parking</h2>
      <div className="alert">
        { !isSpace &&
          <p>There aren't any spaces available!</p>
         
        }
      </div>
      <div className="content">
        {
          defValue.map((row, i)=> {
            return (
              <div className="row" key={`key-${i}`}>
                <div className="cell" onClick={ () => findFindSpot(i, 1)}>Building { i + 1 } - 1</div>
                {
                  row.map((item, j)=> {
                    if( x != -1 && y != -1 && x == i && y == j && isSpace ) {
                      return (
                        <div className={`cell active`} key={`key-${j}`}>{ item }</div>
                      )
                    } else {
                      return (
                        <div className={`cell`} key={`key-${j}`}>{ item }</div>
                      )
                    }
                    
                  })
                }
                <div className="cell" onClick={ () => findFindSpot(i, 2)}>Building { i + 1 } - 2</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}