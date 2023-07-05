import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WriteStory from "./components/WriteStory";
import ShowStory from "./components/ShowStory";
export default function App() {
  return (
    <>
      <BrowserRouter>
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
            path="/show-story"
            element={<ShowStory />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
