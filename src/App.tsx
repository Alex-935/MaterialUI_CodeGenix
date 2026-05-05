
import React, {useState} from 'react';
import {Button, CssBaseline, TextField, Slider, Stack, 
  Container} from "@mui/material";

function App() {

  const [value, setValue] = useState("");

  // MUI Spacing is 8px by default
  return ( 
    <Container maxWidth="xs">
      <Stack gap={2}>
        <CssBaseline />
        <Button variant="contained">Hello World</Button>
        <TextField value={value} onChange={(e) => {
          setValue(e.target.value);
          }} 
          error={!value}
        />
        <Slider />
      </Stack>
    </Container>
  );
}

export default App
