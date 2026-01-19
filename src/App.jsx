import { TooltipProvider } from "@radix-ui/react-tooltip";

import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AppContent from "./AppContent";
import FullscreenToggle from "./components/elements/FullScreenToggle";
import AnimatedCursor from "./components/elements/AnimatedCursor";
import { TwoColumnsLayout } from "./components/elements/SectionLayouts";

const ContextProviders = ({ children }) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    <ThemeProvider>{children}</ThemeProvider>
  </TooltipProvider>
);

const GlobalUI = () => (
  <>
    <div className="fixed right-6 bottom-6 z-(--z-fullscreen-btn) sm:right-10 sm:bottom-10">
      <FullscreenToggle />
    </div>
    <AnimatedCursor />
  </>
);

const Layout = ({ children }) => (
  <>
    <Header />
    <GlobalUI />
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => (
  <ContextProviders>
    <Layout>
      <AppContent />
    </Layout>
  </ContextProviders>
);

export default App;
