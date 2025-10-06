import { TooltipProvider } from "@radix-ui/react-tooltip";

import ThemeProvider from "@/contexts/ThemeContext";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import AppContent from "@//AppContent";

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

const App = () => (
  <ContextProviders>
    <Layout>
      <AppContent />
    </Layout>
  </ContextProviders>
);

export default App;
