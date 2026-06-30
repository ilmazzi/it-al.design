import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FaviconUpdater from "@/components/FaviconUpdater";
import { queryClientInstance } from "@/lib/query-client";
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <FaviconUpdater />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
