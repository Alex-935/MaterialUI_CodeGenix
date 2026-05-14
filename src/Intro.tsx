
import React, {useState} from 'react';
import {Button, CssBaseline, TextField, Slider, Stack, 
  Container} from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function Intro() {

  const [value, setValue] = useState("");

  // MUI Spacing is 8px by default
  return ( 
    <Container maxWidth="xs">{/*Centers everything horizontally*/}
      <Stack>{/* stack stacks things vertically, gap is in increments of 8px*/}
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
  );
}

export default Intro;