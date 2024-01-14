import logo from "./logo.svg";
import "./App.css";
import ClientPage from "./pages/clientPage/clientPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import NewClient from "./pages/newClient/NewClient";
import NewOrder from "./pages/newOrder/NewOrder";
import Layout from "./pages/layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="clientInformation" element={<ClientPage />} />
            <Route path="neworder" element={<NewOrder />} />
            <Route path="newclient" element={<NewClient />} />

            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
