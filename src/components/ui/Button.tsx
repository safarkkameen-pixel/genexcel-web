'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        primary: [
          'text-white bg-gradient-to-br from-primary-600 to-secondary-500 shadow-md',
          'hover:opacity-90',
          'dark:text-[#F2FEFF] dark:bg-gradient-to-br dark:from-white/[.32] dark:via-[#22D3EE]/[.24] dark:to-[#60A5FA]/20',
          'dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/[.36]',
          'dark:shadow-[0_10px_26px_rgba(4,14,30,.35)] dark:hover:border-white/50 dark:hover:opacity-100',
          'focus-visible:ring-primary-500',
          'active:scale-[0.98]',
        ],
        secondary: [
          'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50',
          'dark:text-[#E9F4FF] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.13] dark:to-white/[.05]',
          'dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:border-white/20',
          'dark:hover:border-white/[.38] dark:hover:from-white/20 dark:hover:to-[#22D3EE]/[.14]',
          'focus-visible:ring-primary-500',
        ],
        ghost: [
          'text-slate-700 dark:text-[#C7D2E5] hover:text-primary-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10',
          'focus-visible:ring-primary-500',
        ],
        glow: [
          'bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 text-white',
          'shadow-lg shadow-primary-500/30',
          'hover:shadow-glow-lg',
          'animate-gradient bg-[length:200%_auto]',
        ],
        outline: [
          'text-slate-700 bg-transparent border border-slate-300 dark:border-white/20 dark:text-[#E9F4FF]',
          'hover:border-primary-500 hover:text-primary-600 dark:hover:border-white/40 dark:hover:text-white',
          'focus-visible:ring-primary-500',
        ],
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      magnetic = false,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {/* Shimmer effect for primary/glow variants */}
        {(variant === 'primary' || variant === 'glow') && (
          <span className="absolute inset-0 -z-10">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </span>
        )}

        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          disabled={isLoading || disabled}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          type={props.type}
          onClick={props.onClick as HTMLMotionProps<'button'>['onClick']}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
