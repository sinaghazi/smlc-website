import React from 'react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.png';  // Import the image


interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
};

export const Logo: React.FC<LogoProps> = ({
                                              size = 'md',
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
                    sizeClasses[size]
                )}
            />
        </div>
    );
};
