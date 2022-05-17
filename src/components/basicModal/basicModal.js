import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReactComponent as CogIcon } from './icons/cog.svg';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const cogStyle = {
  width: 50,
  height: 50,
}


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
     <Button className='button-ui' onClick={handleOpen}>
         <CogIcon style={cogStyle}/>
        </Button><Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Character Settings
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
    </div>
  );
}



















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