
import { Input, Button, Radio, CssBaseline, Container, Stack, createTheme, ThemeProvider, Typography, RadioGroup, FormControlLabel, useColorScheme, alpha} from '@mui/material'
import { red, blue, purple, lime, pink} from '@mui/material/colors';

function ThemeToggle() {

    const { mode, setMode } = useColorScheme();
    // sets a default theme
    if (!mode) return null;
    

    return (
        <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as 'system' | 'light' | 'dark')}>
            <FormControlLabel control={<Radio />} value="system" label="System" />
            <FormControlLabel control={<Radio />} value="light" label="Light" />
            <FormControlLabel control={<Radio />} value="dark" label="Dark" />
        </RadioGroup>
    )
}

const theme = createTheme({
    colorSchemes: {
        //dark: true,
        //we can customise the modes
        dark: {
            palette: {
                primary: {
                    // other colours are automatically generated from the main colour
                    // although you can set them if you would like
                    main: '#543345',
                    // dark and light can also be changed
                }
            }
        },
        light: {
            palette: {
                primary: {
                    main: alpha("#ff0000", 0.5),
                },
                // allows you to import the palette rather than change them 1 by 1
                secondary: purple,

                //does not exist by default, refer to "./types/mui.d.ts"
                custom: {
                    main: lime[500],
                },
            }
        }
    }
})

function ThemeTogglerComponent() {

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <Stack>
                    <ThemeToggle />
                    <Button variant="contained" color="secondary">Submit</Button>
                    {/*<Button color="custom">Lime</Button>*/}
                    <Button sx= {
                        [
                            () => ({
                                backgroundColor: "red",
                            }),
                            (theme) => theme.applyStyles('dark', {
                                backgroundColor: "grey",
                            })
                        ]
                    }>Sumbition</Button>
                    <Button sx={
                        [
                            (theme) => theme.applyStyles('dark', {
                                backgroundColor: "pink",
                            })
                        ]
                    }>Hello</Button>
                </Stack>
            </Container>
        </ThemeProvider>    
    );
}
export default ThemeTogglerComponent;