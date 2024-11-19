import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {Book, Home, Trophy, Menu, X, Users, Mail} from 'lucide-react';
import { Logo } from '@/assets/Logo';

const Layout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/explanation', icon: Book, label: 'Learn More' },
        { path: '/challenge', icon: Trophy, label: 'Challenge' },
        { path: '/teams/assessment', icon: Users, label: 'Team Assessment' },
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
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {navigationItems.map(({ path, icon: Icon, label }) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium ${
                                            isActive(path)
                                                ? 'border-orange-500 text-gray-900'
                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {label}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex items-center sm:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
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
                                            ? 'bg-orange-50 border-orange-500 text-orange-700'
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-150`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        {label}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-sm leading-5 text-gray-500">
                            Sina's Multidimensional Leadership Cube (SMLC) is licensed under the{' '}
                            <a
                                href="https://creativecommons.org/licenses/by/4.0/"
                                className="text-indigo-600 hover:text-indigo-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CC BY 4.0
                            </a>{' '}
                            license. You are free to share and adapt the material for any purpose, even commercially, as
                            long as appropriate credit is given.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
