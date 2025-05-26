import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import ScrollToTop from "./utilities/scrollToTop";

const theme = {
  colors: {
    white: "#FAF9F6",
    black: "#060606",
    gold: "#AD974F",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/projartweb" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
