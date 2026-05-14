
import React, {useState} from 'react';
import {Button, CssBaseline, TextField, Slider, Stack, 
  Container} from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function App() {

  const [value, setValue] = useState("");

  // MUI Spacing is 8px by default
  return ( 
    <>
      <Container maxWidth="xs">{/*Centers everything horizontally*/}
        <Stack gap={2}>{/* stack stacks things vertically, gap is in increments of 8px*/}
        <CssBaseline />
          <Button startIcon={<AutoAwesomeRoundedIcon />} variant="contained">Hello World</Button>
        <TextField value={value} onChange={(e) => {
          setValue(e.target.value);
          }} 
          error={!value}
        />
        <Slider />
      </Stack>
        <AutoAwesomeRoundedIcon fontSize="small" color="error"/>
      </Container>
      
      <CssBaseline />
      <Container sx={{height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}
      maxWidth="xs">
        <Stack gap={2}>
          <Slider sx={{width:100,color:'success.main', ":hover": {backgroundColor: "yellow"},
            /* When selecting a class, use an & which is equivalent to the root of the component*/
            "& .MuiSlider-thumb": {backgroundColor:'red', ":hover" :{backgroundColor: 'blue'}},
            /* there are certain properties that the browser doesnt recognise such as disabled,
               error, focused, etc, so Mui-disabled has to be used instead 
            there is no space between &.Mui-disables because it sits higher on the hierarchy
            than MuiSlider-thumb */
            "&.Mui-disabled": { "& .MuiSlider-thumb": {backgroundColor: "green"}},
            "&.Mui-disabled .MuiSlider-rail": {backgroundColor: "error.main"},
          }}/>
        </Stack>
    </Container>
    </>
  );
}

export default App
