import { createContext} from "react";




export const DataContext = createContext(null);


// export const fetchData = async ()=> {
//   try {
//     const response = await fetch('data.json')
//     const data = await response.json();
//     // console.log(data);
//     return data;
//   } catch (error){
//     console.log(error);
//   }
// }

// // fetchData();