import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex:7
};

const cogStyle = {
  width: 50,
  height: 50,
  zIndex:5
}


function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
     <Button style={{position:'absolute',top:0,right:20,zIndex:7}} onClick={handleOpen}>
         <SettingsOutlinedIcon style={cogStyle}/>
        </Button><Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Chuwhekfhawpiou
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              uhkhkhkhkjhkhkhkhkhkhkhjkhkhkkhkhk
            </Typography>
          </Box>
        </Modal>
    </div>
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