
import {useEffect, useState} from "react";

 
function Table() {
  
  const [spatable, setSpatable] = useState(false);
  useEffect(() => {
    getSpatable();
  }, []);
  function getSpatable() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setSpatable(data);
        
      });
     
  }
  console.log(typeof({spatable}));
  //  const data = Object.entries({spatable});
  // ключи объекта преобразуем в массив (ES6)
// Object.keys({spatable});

// значения объекта преобразуем в массив (ES8)
// // Object.values({spatable});
// console.log(typeof{spatable});
  //  console.log(typeof(data));
  //  console.log(data);
  //  console.log({spatable});
    return (
      
              <div >
                
  {spatable}

    </div>
  );
}
  

 export default Table; 




//  import {useEffect, useState} from "react";

//  import './App.css';
 
 
// function Table() {
  
//   const [spatable, setSpatable] = useState();
//   useEffect(() => {
//     getSpatable();
//   }, []);
//   function getSpatable() {
//     fetch('http://localhost:3002')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setSpatable(data);
        
//       });
     
//   }

 
//    return (

//                     <div className="Table">
                      
//       <table>
//       {spatable}
        
//               <tr>
//                 <th>Date</th>
//                 <th>Name</th>
//                 <th>Quanity</th>
//                 <th>Distance</th>
//                </tr>
              /* {spatable.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.name}</td>
                    <td>{val.quanity}</td>
                    <td>{val.distance}</td>
                  </tr>
                )
              })} */
        //     </table>
        //   </div>
        // );
        //     }
        //     export default Table;