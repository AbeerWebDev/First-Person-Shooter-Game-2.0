import React from "react";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import './index.css';
import { ReactComponent as CogIcon } from './icons/cog.svg';

function App() {
  return (
    <div>
      <Navbar>

      <NavItem icon='Shape'>
        
        <DropdownMenu>
    
        </DropdownMenu>

      </NavItem>

      <NavItem icon='Color'>
        
        <DropdownMenu>

        </DropdownMenu>

      </NavItem>

       </Navbar>

      
    </div>
  );
}

export default App;
