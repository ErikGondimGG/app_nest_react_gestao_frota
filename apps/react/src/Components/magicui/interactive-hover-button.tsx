import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { BorderBeam } from './border-beam';

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withBeam?: boolean;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, disabled, withBeam, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border border-neutral-200 bg-white p-2 px-6 text-center font-semibold dark:border-neutral-800 dark:bg-neutral-950',
        disabled ? 'cursor-default opacity-50' : '',
        className
      )}
      disabled={disabled}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            'h-2 w-2 rounded-full bg-neutral-900 transition-all duration-300 group-hover:scale-[100.8] dark:bg-neutral-50',
            disabled ? 'group-hover:scale-100' : ''
          )}
        ></div>
        <span
          className={cn(
            'inline-block dark:text-neutral-50 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0',
            disabled ? 'group-hover:translate-x-0 group-hover:opacity-100' : ''
          )}
        >
          {children}
        </span>
      </div>
      <div
        className={cn(
          'absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-neutral-50 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:text-neutral-900',
          disabled ? 'group-hover:translate-x-12 group-hover:opacity-0' : ''
        )}
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
      {!disabled && withBeam && (
        <BorderBeam
          size={40}
          colorTo="#000000"
          colorFrom="#00ffaa"
          className="from-transparent via-green-500 to-transparent"
        />
      )}
    </button>
  );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';
