import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    orange:
      'bg-orange-900 text-white hover:bg-orange-700 active:bg-orange-800 focus-visible:outline-orange-900',
    green:
      'bg-green-900 text-white hover:bg-green-500 active:bg-green-900 focus-visible:outline-green-500',
  },
  outline: {
    orange:
      'ring-orange-200 text-orange-700 hover:text-orange-900 hover:ring-orange-300 active:bg-orange-100 active:text-orange-600 focus-visible:outline-orange-600 focus-visible:ring-orange-300',
    green:
      'ring-green-700 text-white hover:ring-green-500 active:ring-green-700 focus-visible:outline-white',
  },
};

type ButtonProps = (
  | {
      variant?: 'solid';
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: 'outline';
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid';
  props.color ??= 'orange';

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
