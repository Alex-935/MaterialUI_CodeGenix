
import { Container, CssBaseline, Stack, Slider } from "@mui/material";

function SxPropsCustomisation() {

    return (
        <>
            <CssBaseline />{/* Gets rid of default margins etc */}
            {/* sx tag is a more customisable version of sytle tag*/}
            <Container sx={{height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}
            maxWidth="xs">
                <Stack>
                {/* success.main is a color that comes from the default theme, refer to default theme viewer on documentation for more options */}
                <Slider sx={{width:100,color:'success.main', ":hover": {backgroundColor: "yellow"},
                    /* When selecting a class, use an & which is equivalent to the root of the component*/
                    "& .MuiSlider-thumb": {backgroundColor:'red', ":hover" :{backgroundColor: 'blue'}},
                    /* there are certain properties that the browser doesnt recognise such as disabled,
                    error, focused, etc, so Mui-disabled has to be used instead 
                    there is no space between &.Mui-disables because .Mui-root and .Mui-Disabled are at the
                    same level in the hierarchy */
                    "&.Mui-disabled": { "& .MuiSlider-thumb": {backgroundColor: "green"}},
                    "&.Mui-disabled .MuiSlider-rail": {backgroundColor: "error.main"},
                }}/>
                </Stack>
            </Container>
        </>
    );
}
export default SxPropsCustomisation;