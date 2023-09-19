import { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { PUBLIC_ROUTES } from "./config/routes";

import "swiper/css";
import "./App.css";

//Contexts
import { AppContextLayout } from "./context/appcontext";

//Theme Provider
import ThemeContext from "./Provider";

// Pages
import Home from "./pages/Home";

// Layout
import Layout from "./layout/layout";

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <AppContextLayout>
          <ThemeContext>
            <Layout>
              <Routes>
                <Route path={"/"} element={<Home />} />
              </Routes>
            </Layout>
          </ThemeContext>
        </AppContextLayout>
      </Router>
    </Suspense>
  );
}

export default App;
