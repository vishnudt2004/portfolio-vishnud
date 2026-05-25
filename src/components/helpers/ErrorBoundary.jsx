import { Component } from "react";
import { twMerge } from "tailwind-merge";
import { RiRestartLine } from "@remixicon/react";

import Button from "../ui/Button";

const ErrorFallback = ({
  message = "Something went wrong.",
  height = "400px",
  className,
  error,
  componentStack,
}) => (
  <div
    className={twMerge(
      "flex flex-col items-center justify-center gap-6 text-center",
      className,
    )}
    style={{ minHeight: height }}
  >
    <p className="text-red-400">{message}</p>
    <Button
      variant="soft"
      color="var(--color-red-400)"
      icon={<RiRestartLine aria-hidden className="size-4" />}
      onClick={() => window.location.reload()}
    >
      Reload page
    </Button>

    {!closed && import.meta.env.DEV && error && (
      <div className="secondary-scrollbar fixed top-4 right-4 z-99 flex max-h-[320px] flex-col gap-2 overflow-y-auto rounded-sm border border-red-500/60 bg-red-950/90 p-4 text-left font-mono text-xs text-red-300 shadow-xl max-sm:inset-3 sm:max-w-[600px] [&::-webkit-scrollbar-thumb]:border-red-950/90 [&::-webkit-scrollbar-thumb]:bg-red-500/50 [&::-webkit-scrollbar-thumb:hover]:bg-red-500/70">
        {/* <button className="text-lg absolute top-3 right-3 px-1 leading-6">✕</button> */}
        <span className="text-sm font-bold text-red-400">⚠ Error Boundary</span>
        <span className="font-semibold text-red-300">{error.toString()}</span>
        {componentStack && (
          <pre className="break-all whitespace-pre-wrap opacity-80">
            {componentStack.trim()}
          </pre>
        )}
      </div>
    )}
  </div>
);

export default class ErrorBoundary extends Component {
  state = { crashed: false, error: null, componentStack: null };

  static getDerivedStateFromError(error) {
    return { crashed: true, error };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error(error, info.componentStack);
    this.setState({ componentStack: info.componentStack });
  }

  render() {
    const { children, ...fallbackProps } = this.props;
    if (this.state.crashed)
      return (
        <ErrorFallback
          {...fallbackProps}
          error={this.state.error}
          componentStack={this.state.componentStack}
        />
      );
    return children;
  }
}
