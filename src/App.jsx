import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WriteStory from "./pages/WriteStory";
import CopyRight from "./components/CopyRight";
import NavBar from "./components/NavBar";
import ReadStory from "./pages/ReadStory";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route 
            path="/write-story"
            element={<WriteStory/>}
          />
          <Route 
            path="/read-story"
            element={<ReadStory />}
          />
        </Routes>
        <CopyRight />
      </BrowserRouter>
    </>
  );
}
