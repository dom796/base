import { lazy, Suspense } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import './App.css';

const StaticContent = lazy(() => import('./components/StaticContent.tsx'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="app-container">
                <header className="app-header">
                    <a href="https://vite.dev" rel="noopener noreferrer" target="_blank">
                        <img alt="Vite logo" className="logo" height="100" loading="lazy" src={viteLogo} width="100" />
                    </a>
                    <a href="https://react.dev" rel="noopener noreferrer" target="_blank">
                        <img
                            alt="React logo"
                            className="logo react"
                            height="100"
                            loading="lazy"
                            src={reactLogo}
                            width="100"
                        />
                    </a>
                </header>
                <h1>Vite + React</h1>
                <StaticContent />
            </div>
        </Suspense>
    );
}

export default App;
