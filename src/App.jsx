import { TooltipProvider } from "@radix-ui/react-tooltip";

import ThemeModeProvider from "@contexts/ThemeModeContext";
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";
import Home from "@pages/Home";

const ContextProviders = ({ children }) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    <ThemeModeProvider>{children}</ThemeModeProvider>
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
      <Home />
    </Layout>
  </ContextProviders>
);

export default App;
