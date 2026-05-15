
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";

type ProvidersProps = {
    children: ReactNode;
};
const Providers = ({ children }: ProvidersProps) => {
    const theme = useTheme();
    return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>
}
export { Providers };