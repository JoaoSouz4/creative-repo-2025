import { Layout } from "./components/layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Drawings } from "./pages/drawings";
import { About } from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout />}>
          <Route index element = {<Drawings />} />
          <Route path="/about" element = {<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
