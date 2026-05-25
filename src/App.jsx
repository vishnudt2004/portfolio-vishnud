import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router";
import { twJoin } from "tailwind-merge";

import ThemeProvider from "./contexts/ThemeContext";
import RestoreScroll from "./components/helpers/RestoreScroll";
import NavigateHelper from "./components/helpers/NavigateHelper";
import ErrorBoundary from "./components/helpers/ErrorBoundary";
import AnimatedCursor from "./components/ui/AnimatedCursor";
import Loader from "./components/ui/Loader";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home";

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
  </>
);

const ContextProviders = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const AppLayout = ({ children }) => {
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
            <ErrorBoundary
              message="Something went wrong on this page."
              height="80svh"
            >
              {lazy ? (
                <Suspense fallback={<Loader />}>{element}</Suspense>
              ) : (
                element
              )}
            </ErrorBoundary>
          }
          {...props}
        />
      ))}
    </Routes>
  );
};

const App = () => (
  <ErrorBoundary message="Something went wrong." height="100svh">
    <BrowserRouter>
      <ContextProviders>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ContextProviders>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
