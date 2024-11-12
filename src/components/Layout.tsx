import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Book, Home,  Trophy } from 'lucide-react';
import { Logo } from '@/assets/Logo';

const Layout: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Logo */}
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <Logo size="md" />
                            </Link>

                            {/* Navigation Links */}
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    to="/"
                                    className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium ${
                                        isActive('/')
                                            ? 'border-orange-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                >
                                    <Home className="w-4 h-4" />
                                    Home
                                </Link>
                                <Link
                                    to="/explanation"
                                    className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium ${
                                        isActive('/explanation')
                                            ? 'border-orange-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                >
                                    <Book className="w-4 h-4" />
                                    Learn More
                                </Link>
                                <Link
                                    to="/challenge"
                                    className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium ${
                                        isActive('/challenge')
                                            ? 'border-orange-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                >
                                    <Trophy className="w-4 h-4" />
                                    Challenge
                                </Link>
                            </div>
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
