// TODO:
// Fix page heading hierarchy (h1/h2) across pages.
// Sections currently start at h2 because they are reused in Home.
// Page-level h1 should be introduced in a future refactor.

import { Routes, Route, useLocation } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

import ThemeProvider from "./contexts/ThemeContext";
import AnimatedCursor from "./components/ui/AnimatedCursor";
import RestoreScroll from "./components/helpers/RestoreScroll";
import NavigateHelper from "./components/helpers/NavigateHelper";
import FocusFixer from "./components/helpers/FocusFixer";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Activities from "./pages/Activities";
import NotFound from "./pages/NotFound";

const ContextProviders = ({ children }) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    <ThemeProvider>{children}</ThemeProvider>
  </TooltipProvider>
);

const GlobalUI = () => (
  <>
    <AnimatedCursor />
    <RestoreScroll />
    <NavigateHelper />
    <FocusFixer />
  </>
);

const Layout = ({ children }) => {
  const topOffset = useLocation().pathname !== "/";

  return (
    <>
      <Header />
      <GlobalUI />
      <main
        className={twMerge("mx-auto mb-12 max-w-6xl", topOffset && "mt-15")}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  const routes = [
    { element: <Home />, index: true },
    { path: "/projects", element: <Projects /> },
    { path: "/achievements", element: <Achievements /> },
    { path: "/certifications", element: <Certifications /> },
    { path: "/activities", element: <Activities /> },
    { path: "/*", element: <NotFound /> },
  ];

  return (
    <Routes>
      {routes.map((props, i) => (
        <Route key={`route$*-${i}`} {...props} />
      ))}
    </Routes>
  );
};

const App = () => (
  <ContextProviders>
    <Layout>
      <AppRoutes />
    </Layout>
  </ContextProviders>
);

export default App;
