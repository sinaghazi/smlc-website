import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {Book, Home, Trophy, Menu, X, Users, Mail, Vote} from 'lucide-react';
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
        { path: '/contact', icon: Mail, label: 'Contact' },
        { path: '/campaign', icon: Vote, label: 'Campaign 2025' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-kokoomus-beige">
            {/* Navigation */}
            <nav className="bg-kokoomus-navy shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            {/* Logo */}
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <Logo size="md" inverted={true} />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {navigationItems.map(({ path, icon: Icon, label }) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`inline-flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-barlowSemi uppercase ${
                                            isActive(path)
                                                ? 'border-kokoomus-blue text-white'
                                                : 'border-transparent text-kokoomus-lightBlue hover:border-kokoomus-lightBlue hover:text-white'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-kokoomus-blue focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="pt-2 pb-3 space-y-1">
                        {navigationItems.map(({ path, icon: Icon, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center gap-3 px-3 py-2 text-base font-barlowSemi uppercase ${
                                    isActive(path)
                                        ? 'bg-kokoomus-blue text-white'
                                        : 'text-white hover:bg-kokoomus-lightBlue hover:text-kokoomus-navy'
                                }`}
                                onClick={toggleMenu}
                            >
                                <Icon className="w-5 h-5" />
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-kokoomus-navy text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <Logo size="md" inverted={true} />
                            <p className="mt-2 text-sm text-kokoomus-lightBlue font-sourceSerif">
                                &copy; {new Date().getFullYear()} Sina's Multidimensional Leadership Cube
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                            {navigationItems.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className="text-sm text-kokoomus-lightBlue hover:text-white font-barlowSemi uppercase"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
