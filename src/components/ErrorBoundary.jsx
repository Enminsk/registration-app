import React from "react";

export class ErrorBoundary extends React.Component {
    state = {
        isError: false,
    }

    static getDerivedStateFromError(error) {
        return {isError: true };
    }
    
    render () {
        if (!this.state.isError) {
            return this.props.children;
        }
        return <div>Всё фигня! Переделывай!</div>
    }
}