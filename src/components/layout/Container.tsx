import { forwardRef, type ElementType, type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = '', as: Tag = 'div', id }, ref) => {
    return (
      <Tag
        id={id}
        ref={ref}
        className={`mx-auto w-full max-w-8xl overflow-x-clip px-6 sm:px-8 lg:px-12 ${className}`}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = 'Container';