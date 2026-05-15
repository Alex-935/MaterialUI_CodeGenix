
import { Button, ThemeProvider, CssBaseline, createTheme, alpha, Grid, Container, Typography, useMediaQuery, Autocomplete, TextField} from '@mui/material';
import { red, blue, purple, lime } from '@mui/material/colors';

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
    },
    breakpoints: {
        //values: { // need to be added to mui.d.ts
            //xl: 1400,
            //mobile: 0,
            // tablet
            //tablet: 640,
            //laptop: 1024,
            //desktop: 1200,
        //}
    },
});


// applying to global theme, must be done outside of theme config, by overriding 
theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "2.4rem",
    }
}

const useIsTablet = () => useMediaQuery('(min-width: 640px)');
function ResponsiveDesign() {

    // with a media hook:
    //const isTablet = useMediaQuery('(min-width: 640px)')
    const isTablet = useIsTablet();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Breakpoints:
            xs - 0px
            sm - 600px
            md - 900px
            lg - 1200px
            xl - 1536px 
            
            Can be changed in theme*/}

            {/* When wrapped in a container, everything is resized to match it */}
            <Container maxWidth="md">
                {/* when specifying a grid as a container, each element need to be wrapped in
                it's own grid 
                Spacing can be done spereately for rowSpacing & columnSpacing*/}
                <Grid container spacing={2}>
                    {/* We are saying on xs devices, it will take up 2 spaces
                    There are 12 spaces overall by default */}
                    <Grid size={{xs:12, md: 6, xl: 4}}>
                        <Button fullWidth>1</Button>
                    </Grid>
                    <Grid size={{xs:12, md:6, xl: 4}}>
                        <Button fullWidth>2</Button>
                    </Grid>
                    {/* Grow will calculate the size automatically in relation to other elements */}
                    <Grid size="grow">
                        <Button fullWidth>3</Button>
                    </Grid>
                    {/* You can next grid containers and within that there will be another
                    12 column system */}
                    <Grid container >
                    </Grid>
                </Grid>

                <Button sx={(theme) => ({
                    backgroundColor: "green",
                    // use [] for dynamic themeing
                    [theme.breakpoints.between('xs','lg')]: {
                        backgroundColor: 'cyan',
                    }
                })}>Responsive Button</Button>
            </Container>
            <Typography variant="h3">H3</Typography>
            {isTablet ? <>Tablet</> : <>Not Tablet</>}
            <Autocomplete sx={{width:300}} renderInput={(params) => <TextField {...params} label="User"/>}
             options={[]}/>
        </ThemeProvider>
    );
}
export default ResponsiveDesign;