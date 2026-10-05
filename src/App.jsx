import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FaviconUpdater from './components/FaviconUpdater';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AreaRiservata from './pages/AreaRiservata';

function App() {
  return (
    <>
      <FaviconUpdater />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/area-riservata" element={<AreaRiservata />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
