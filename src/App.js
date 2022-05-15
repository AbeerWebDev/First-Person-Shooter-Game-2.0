import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";

import "./index.css";

import Container from "./components/Container/Container";
import UserOptions from "./components/UserOptions/UserOptions";
import Character from "./components/Character/Character";
import BallColor from "./components/BallColor/BallColor";
import { ReactComponent as CogIcon } from './icons/cog.svg';
// import React, { useState } from 'react';

function App() {



  return (

    <div ClassName="parent">
      <Navbar>
       
        <NavItem />

        <select>
        <CogIcon/>
        </select>



       
     
      </Navbar>
      <Container/>
      
          <UserOptions></UserOptions>
          <Character></Character>
          <BallColor></BallColor>
      
    </div>

  );

}

export default App;
