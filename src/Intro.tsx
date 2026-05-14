
import React, {useState} from 'react';
import {Button, CssBaseline, TextField, Slider, Stack, 
  Container} from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function Intro() {

  const [value, setValue] = useState("");

  // MUI Spacing is 8px by default
  return ( 
    <Container maxWidth="xs">
      <Stack gap={2}>
        <CssBaseline />
        <Button startIcon={<AutoAwesomeRoundedIcon />} variant="contained">
          Submit
        </Button>
        <TextField value={value} onChange={(e) => {
          setValue(e.target.value);
          }} 
          error={!value}
        />
        <Slider />
        <AutoAwesomeRoundedIcon fontSize="small" color="error"/>
      </Stack>
    </Container>
  );
}

export default Intro;