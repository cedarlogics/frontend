import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/home';
import ConsolePage from './pages/console';
import BlogPage from './pages/blog';
import BlogPost from './pages/blog/BlogPost';
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/console" element={<PageWrapper><ConsolePage /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPage /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsPage /></PageWrapper>} />
        <Route path="*" element={
          <PageWrapper>
            <div className="min-h-screen flex items-center justify-center text-center px-4">
              <div>
                <div className="text-8xl font-display font-bold text-gradient-red mb-4">404</div>
                <h1 className="text-2xl font-display font-semibold text-cedar-frost mb-2">Page Not Found</h1>
                <p className="text-cedar-frost/50 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary inline-flex items-center gap-2">Go Home</a>
              </div>
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cedar-dark">
        <Navbar />
        <AppRoutes />
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
