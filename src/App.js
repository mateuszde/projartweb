import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";

const theme = {
    colors: {},
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            {/* <Home />
            <Footer /> */}
        </ThemeProvider>
    );
}

export default App;
