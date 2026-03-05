import React, { useState } from 'react';
import { createContext } from "react";

export let imgcontext=createContext()


export default function CounterContext (props)  {

    const [img1, setimg1] = useState("mina00001");
    const [img2, setimg2] = useState("mina00002");
    return (
        <imgcontext.Provider value={{img1, img2}}>
            {props.children}
        </imgcontext.Provider>
    );
}




































// import React, { useState } from 'react';
// import { createContext } from "react";


// export let CounterContext=createContext();


// export default function CounterContextr (props) {
// const [count, setcount] = useState(9);
// function change(x){
//     setcount(x)
// }
     
//     return (
//         <CounterContext value={{count,change}}>
//             {props.children}
//         </CounterContext>
//     );
// }



// import { createContext, useState } from "react";

// export const CounterContext = createContext();

// export default function CounterContextr(props) {
//   const [count, setCount] = useState(9);

//   function change(x) {
//     setCount(x);
//   }

//   return (
//     <CounterContext.Provider value={{ count, change }}>
//       {props.children}
//     </CounterContext.Provider>
//   );
// }








