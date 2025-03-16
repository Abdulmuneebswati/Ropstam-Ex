import { cn } from '@/utils/cn';
import { Spin } from 'antd';
import { forwardRef } from 'react';

const buttonVariants = {
  light: 'bg-foreground text-white',
  dark: 'bg-black text-white px-16',
  border: 'bg-white border border-border text-kprimary',
};

const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      className,
      onClick,
      variant = 'dark',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        id={variant}
        type={type}
        onClick={onClick}
        disabled={props.disabled || isLoading}
        className={cn(
          'font-roobert  px-6 py-2 font-frank text-[18px]  rounded-[8px] inline-flex gap-2 items-center justify-center disabled:pointer-events-none disabled:opacity-50 outline-none transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-kprimary',
          !props.disabled && 'hover:opacity-90',
          buttonVariants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? <Spin /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
