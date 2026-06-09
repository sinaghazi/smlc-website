import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Layout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { path: '/story', label: 'Story' },
        { path: '/explanation', label: 'The SMLC' },
        { path: '/work', label: 'Work' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-14 items-center justify-between">
                        {/* Wordmark */}
                        <Link to="/" className="flex items-baseline gap-2">
                            <span className="font-display text-base font-semibold tracking-tight text-stone-900">
                                Sina Ghazi
                            </span>
                            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 sm:inline">
                                [ 0.5 · 1.0 · 0.5 ]
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-7 sm:flex">
                            {navigationItems.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`font-mono text-xs uppercase tracking-[0.15em] transition ${
                                        isActive(path)
                                            ? 'text-accent-600'
                                            : 'text-stone-500 hover:text-stone-900'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 border border-stone-900 bg-stone-900 px-3.5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-stone-50 transition hover:bg-accent-600 hover:border-accent-600"
                            >
                                Try työ
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 text-stone-600 hover:text-stone-900 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-accent-600"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                        <div className="space-y-1 border-t border-stone-200 pb-4 pt-2">
                            {navigationItems.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`block py-2.5 font-mono text-sm uppercase tracking-[0.15em] ${
                                        isActive(path)
                                            ? 'text-accent-600'
                                            : 'text-stone-600 hover:text-stone-900'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-accent-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="inline-flex items-center gap-2">
                                    Try työ <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer — ink panel, big type */}
            <footer className="border-t border-stone-900 bg-stone-950 text-stone-100">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                                Sina Ghazi
                            </p>
                            <p className="mt-3 max-w-sm font-mono text-xs uppercase leading-5 tracking-[0.15em] text-stone-400">
                                Understanding difference, and building what depends on it
                                <br />
                                Lahti, Finland · 60.98° N, 25.66° E
                            </p>
                        </div>
                        <nav className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-300">
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-signal-400"
                            >
                                työ
                            </a>
                            <a
                                href="https://www.innovategy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-signal-400"
                            >
                                Innovategy
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sinaghazi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-signal-400"
                            >
                                LinkedIn
                            </a>
                            <Link to="/contact" className="transition hover:text-signal-400">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-6">
                        <p className="text-xs leading-5 text-stone-500">
                            The SMLC framework is licensed under the{' '}
                            <a
                                href="https://creativecommons.org/licenses/by/4.0/"
                                className="text-stone-400 underline transition hover:text-signal-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CC BY 4.0
                            </a>{' '}
                            license — free to share and adapt with appropriate credit.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
