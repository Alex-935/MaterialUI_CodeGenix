
import { Container, CssBaseline, Slider, Stack, styled, type SliderProps} from "@mui/material";

// inside angle brackets are the properties we want to customise
//  as we dont want to customise any properties, we can just pass in the component props
// the 'theme' object is the initial config provided by mui, and we can get it via callback
const CustomSlider = styled(Slider)<SliderProps>(({theme}) => ({
    width: theme.spacing(10), // 10 * 8px = 80px
    color: theme.palette.success.main,

    "& .MuiSlider-thumb": {
        "&:hover, &Mui-focusVisible" : {
            backgroundColor: "red",
        }
    }
}));


// & merges SliderProps with our custom properties
type CustomSliderProps = SliderProps & {
    // the question mark signifies that the parameter is optional;
    error?: boolean;
}

const CustomSliderWithCustomProps = styled(Slider, {
    // states we should forward all props except our custom error property
    shouldForwardProp: (prop) => prop !== "error",
    // object destructuring for the error property 
})<CustomSliderProps>(({theme, error}) => ({
    width: theme.spacing(10), // 10 * 8px = 80px
    color: theme.palette.success.main,

    "& .MuiSlider-thumb": {
        "&:hover, &Mui-focusVisible" : {
            backgroundColor: error ? "red" : "green",
        }
    }
}));

function ReusableStyledComponent() {

    return(
        <Stack>
            {/* passes custom error property */}
            <CustomSliderWithCustomProps error={true} />
        </Stack>
    );
}
export default ReusableStyledComponent;