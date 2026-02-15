import { Routes, Route, useLocation } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

import ThemeProvider from "./contexts/ThemeContext";
import FullscreenToggle from "./components/elements/FullScreenToggle";
import AnimatedCursor from "./components/elements/AnimatedCursor";
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
    <div className="fixed right-6 bottom-6 z-(--z-fullscreen-btn) sm:right-10 sm:bottom-10">
      <FullscreenToggle />
    </div>
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
      <main className={twMerge("mb-12", topOffset && "mt-15")}>{children}</main>
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
