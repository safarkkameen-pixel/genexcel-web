import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300',
        secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        success: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
        warning: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
        danger: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300',
        outline: 'border-2 border-current bg-transparent',
        gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white',
        glass: 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 text-slate-700 dark:text-slate-300',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  pulse?: boolean;
}

export function Badge({
  className,
  variant,
  size,
  icon,
  pulse,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}
