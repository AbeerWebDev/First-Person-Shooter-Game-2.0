import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";

import "./index.css";

import Container from "./components/Container/Container";
import UserOptions from "./components/UserOptions/UserOptions";
import Character from "./components/Character/Character";
import BallColor from "./components/BallColor/BallColor";
import { ReactComponent as CogIcon } from './icons/cog.svg';

function App() {
  return (
    <div>
      <Navbar>
        {/* the navItem is the cog.svg which is a drop dowm menu for the settings */}
        <NavItem icons={<CogIcon />}></NavItem>
      </Navbar>
      <Container>
        <UserOptions></UserOptions>
        <Character></Character>
        <BallColor></BallColor>

      </Container>
      
    </div>
  );
}

export default App;
