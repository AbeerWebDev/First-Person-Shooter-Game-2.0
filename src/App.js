import * as React from 'react';
import BasicModal from './components/basicModal/basicModal';

function App() {
  return (

        <BasicModal />

  );
}



export default App;















// import React, { useState } from 'react';
// // import Cog from '../../icons/cog.png'


// function NavItem(props) {
    
//     const [open, setOpen] = useState(false)
    
//     return(
       
//        <li className="nav-item">
//             <button className=".icon-button" onClick={() => setOpen(!open)}>{props.icon} </button>
               
    
//             {open && props.children}
//         </li>
//     )
// }

// export default NavItem;