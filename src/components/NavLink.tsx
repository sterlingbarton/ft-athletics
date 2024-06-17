import { Typography } from '@mui/material';
import Link from 'next/link';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-2 py-1 text-md hover:bg-slate-100 hover:text-slate-900`}
    >
      <Typography>{children}</Typography>
    </Link>
  );
}
