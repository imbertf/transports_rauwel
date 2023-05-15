import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import ErrPage from "./pages/ErrPage";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/merci" element={<ThankYouPage />} />
                <Route path="*" element={<ErrPage />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </BrowserRouter>
    );
}

export default App;
