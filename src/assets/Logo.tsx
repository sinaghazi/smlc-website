import React from 'react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.png';  // Import the image


interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    inverted?: boolean; // Add prop for dark background support
}

const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
};

export const Logo: React.FC<LogoProps> = ({
                                              size = 'md',
                                              inverted = false,
                                              className,
                                              ...props
                                          }) => {
    return (
        <div className={cn('flex items-center', className)} {...props}>
            <img
                src={logoImage}  // Use the imported image
                alt="SMLC Logo"
                className={cn(
                    'object-contain',
                    sizeClasses[size],
                    // Apply filter for dark backgrounds when inverted is true
                    inverted && 'brightness-0 invert'
                )}
            />
        </div>
    );
};
