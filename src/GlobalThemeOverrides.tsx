
import { Input, Button, CssBaseline, Container, Stack, createTheme, ThemeProvider, Typography } from '@mui/material'
import { red, blue } from '@mui/material/colors';

const theme = createTheme({

    typography: {
        fontFamily: "Poppins",
        button: {
            fontSize: '3rem',
        },
        h1: {
            fontSize: "5rem",
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                variant: "contained",
            },
            styleOverrides: {
                // it is recommended to use root and update specific states inside
                root: {
                    fontsize: '2rem',
                    // for customising variants, pass a variants array of objects
                    variants: [
                        {
                            // when my component is outlined and has the color secondary,
                            //      make the font size 0.5 rem
                            props: {
                                variant: 'outlined',
                                color: 'secondary'
                            },
                            style: {fontSize: '0.5rem'},
                        },
                        {
                            props: {
                                variant: "dashed",
                            },
                            style: {
                                // using mui color shades
                                border: `4px dashed ${red[500]}`,
                            }
                        },
                        {
                            props: (props) => props.variant === "dashed" && props.color !== 'secondary',
                            style: {
                                border: `5px solid ${blue[500]}`,
                            }
                        }
                    ],
                }
            }
        },
        // global css overwrite
        MuiCssBaseline: {
            // we need to use backticks to overwrite the native elements overridden by baseline
            styleOverrides: (themeParam) => `
                h1 {
                    color: ${theme.palette.success.main}
                }
            `
        }
    },
});

function GlobalThemeOverrides() {

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container >
                <Stack>
                    <Button>Submit</Button>
                    {/* Font sized is halfed in accordance to our rule */}
                    <Button variant="outlined" color="secondary">Custom Variant</Button>
                    {/* dashed variant is not valid by default, so we need to overrite the
                    types of other modules and libraries from our project
                    We need to use module augmentation provided by typescript
                    
                    Make a folder called types ->
                    Make a file called mui.d.ts, the '.d' means global
                    */}
                    <Button variant="dashed" color="secondary">Dashed</Button>
                    <Button variant="dashed">Dashed</Button>
                    <Typography variant="h1">My H1</Typography>
                    <Typography variant="h2">My H2</Typography>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
export default GlobalThemeOverrides;