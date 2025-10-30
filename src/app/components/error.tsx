'use client'; // Add this directive to mark it as a Client Component

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;  // This tells TypeScript that the component will receive children
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    // Update state to indicate that an error has been caught
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an external service (e.g., Sentry)
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;  // Render the children
  }
}

export default ErrorBoundary;
