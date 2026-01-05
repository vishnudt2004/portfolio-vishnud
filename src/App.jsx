import { TooltipProvider } from "@radix-ui/react-tooltip";

import ThemeProvider from "@/contexts/ThemeContext";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import AppContent from "@/AppContent";
import FullscreenToggle from "@/components/elements/FullScreenToggle";
import AnimatedCursor from "./components/elements/AnimatedCursor";

const ContextProviders = ({ children }) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    <ThemeProvider>{children}</ThemeProvider>
  </TooltipProvider>
);

const Layout = ({ outlet, children }) => (
  <>
    <Header />
    {outlet || children}
    <Footer />
  </>
);

const FullScreenBtn = () => (
  <div className="fixed right-6 bottom-6 z-(--fullscreen-toggle-z-index) sm:right-10 sm:bottom-10">
    <FullscreenToggle />
  </div>
);

const App = () => (
  <ContextProviders>
    <Layout>
      <AppContent />
      <FullScreenBtn />
      <AnimatedCursor />
    </Layout>
  </ContextProviders>
);

export default App;
