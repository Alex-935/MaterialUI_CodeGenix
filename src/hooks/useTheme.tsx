
import { createTheme } from "@mui/material";

const useTheme = () => {
    const theme = createTheme({
        /*
        palette: {
            primary: purple,
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: "contained",
                }
            }
        }
        */
    });
    return theme;
};

export {useTheme};