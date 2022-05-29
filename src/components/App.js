import * as React from "react";
// import  DotStepper  from './DotStepper';

import  CustomButton  from './CustomButton'



function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <CustomButton open={open} setOpen={setOpen}>

      {/* <DotStepper /> */}


    </CustomButton>
  );
}

export default App;
