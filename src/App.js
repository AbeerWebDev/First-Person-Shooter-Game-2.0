import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";

import "./index.css";
// import { ReactComponent as CogIcon } from "./icons/cog.svg";
import Container from "./components/Container/Container";
import UserOptions from "./components/UserOptions/UserOptions";
import Character from "./components/Character/Character";
import BallColor from "./components/BallColor/BallColor";

function App() {
  return (
    <div>
      <Navbar>
        {/* the navItem is the cog.svg which is a drop dowm menu for the settings */}
        <NavItem></NavItem>
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
