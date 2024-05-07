import { Typography } from '@mui/material';
import Link from 'next/link';

export function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-2 py-1 text-md ${!isScrolled ? 'text-white' : 'text-slate-700'} hover:bg-slate-100 hover:text-slate-900`}
    >
      <Typography>{children}</Typography>
    </Link>
  );
}
