import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {Home, Menu, X, Mail, BookOpen, Briefcase, Boxes, ArrowUpRight} from 'lucide-react';
import { Logo } from '@/assets/Logo';

const Layout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/story', icon: BookOpen, label: 'Story' },
        { path: '/explanation', icon: Boxes, label: 'The SMLC' },
        { path: '/work', icon: Briefcase, label: 'Work' },
        { path: '/contact', icon: Mail, label: 'Contact' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            {/* Logo */}
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <Logo size="md" />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
                                {navigationItems.map(({ path, icon: Icon, label }) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium ${
                                            isActive(path)
                                                ? 'border-accent-500 text-stone-900'
                                                : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {label}
                                    </Link>
                                ))}
                                <a
                                    href="https://tyo.vaivatta.fi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md bg-accent-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-accent-500"
                                >
                                    Try työ
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex items-center sm:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
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
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                        <div className="pt-2 pb-3 space-y-1">
                            {navigationItems.map(({ path, icon: Icon, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`${
                                        isActive(path)
                                            ? 'bg-accent-50 border-accent-500 text-accent-700'
                                            : 'border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-700'
                                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-150`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        {label}
                                    </div>
                                </Link>
                            ))}
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border-l-4 border-transparent pl-3 pr-4 py-2 text-base font-semibold text-accent-700 hover:bg-accent-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="flex items-center gap-2">
                                    <ArrowUpRight className="w-4 h-4" />
                                    Try työ
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-stone-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div>
                            <p className="font-display text-lg font-medium text-stone-900">Sina Ghazi</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Understanding difference, and building what depends on it. · Lahti, Finland
                            </p>
                        </div>
                        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-stone-600">
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent-600"
                            >
                                työ
                            </a>
                            <a
                                href="https://www.innovategy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent-600"
                            >
                                Innovategy
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sinaghazi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent-600"
                            >
                                LinkedIn
                            </a>
                            <Link to="/contact" className="hover:text-accent-600">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-10 border-t border-stone-100 pt-8">
                        <p className="text-sm leading-5 text-stone-400">
                            The SMLC framework is licensed under the{' '}
                            <a
                                href="https://creativecommons.org/licenses/by/4.0/"
                                className="text-stone-500 underline hover:text-accent-600"
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
