
// need to import the file we are adding to
import "@mui/material";

declare module "@mui/material/Button" {
    // press f12 on the component and at the top of the file is the name of the interfaces
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}

