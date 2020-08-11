import React from "react";
import './style.less';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("ERROR: " + error + " => " + errorInfo);
    }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
            <h1>Oops, Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;