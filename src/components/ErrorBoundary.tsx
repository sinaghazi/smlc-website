// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    /** Rendered instead of the default message when the subtree throws. */
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;
            return (
                <div className="flex h-full w-full items-center justify-center bg-stone-50">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-stone-800">Something went wrong</h2>
                        <button
                            className="mt-4 rounded-md bg-accent-600 px-4 py-2 text-white hover:bg-accent-500"
                            onClick={() => this.setState({ hasError: false })}
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
