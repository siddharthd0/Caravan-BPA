import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#e9eff2",
    primary: "#fff",
    bgColor: "black",
    textColor: "#1a212f",
  },
  styles: {
    global: () => ({
      body: {
        color: "white",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
        color: "primary",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
