// TODO:
// Fix page heading hierarchy (h1/h2) across pages.
// Sections currently start at h2 because they are reused in Home.
// Page-level h1 should be introduced in a future refactor.

import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { twJoin } from "tailwind-merge";

import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import AnimatedCursor from "./components/ui/AnimatedCursor";
import Loader from "./components/ui/Loader";
import RestoreScroll from "./components/helpers/RestoreScroll";
import NavigateHelper from "./components/helpers/NavigateHelper";
import FocusFixer from "./components/helpers/FocusFixer";
import Footer from "./components/layouts/Footer";

const Achievements = lazy(() => import("./pages/Achievements"));
const Projects = lazy(() => import("./pages/Projects"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Activities = lazy(() => import("./pages/Activities"));
const NotFound = lazy(() => import("./pages/NotFound"));

const GlobalUI = () => (
  <>
    <AnimatedCursor />
    <RestoreScroll />
    <NavigateHelper />
    <FocusFixer />
  </>
);

const ContextProviders = ({ children }) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    <ThemeProvider>{children}</ThemeProvider>
  </TooltipProvider>
);

const Layout = ({ children }) => {
  const topOffset = useLocation().pathname !== "/";

  return (
    <>
      <Header />
      <GlobalUI />
      <main className={twJoin("mx-auto mb-12 max-w-6xl", topOffset && "mt-15")}>
        {children}
      </main>
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  const routes = [
    { element: <Home />, index: true },
    { path: "/projects", element: <Projects />, lazy: true },
    { path: "/achievements", element: <Achievements />, lazy: true },
    { path: "/certifications", element: <Certifications />, lazy: true },
    { path: "/activities", element: <Activities />, lazy: true },
    { path: "/*", element: <NotFound />, lazy: true },
  ];

  return (
    <Routes>
      {routes.map(({ lazy, element, ...props }, i) => (
        <Route
          key={`route$*-${i}`}
          element={
            lazy ? (
              <Suspense fallback={<Loader />}>{element}</Suspense>
            ) : (
              element
            )
          }
          {...props}
        />
      ))}
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <ContextProviders>
      <Layout>
        <AppRoutes />
      </Layout>
    </ContextProviders>
  </BrowserRouter>
);

export default App;
