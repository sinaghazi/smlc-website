import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    );
};

export default App;
