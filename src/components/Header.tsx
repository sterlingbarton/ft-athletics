"use client";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Box, Button, Typography } from "@mui/material";

const headerNavigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Volleyball", href: "/volleyball" },
    { name: "Basketball", href: "/basketball" },
    { name: "Cheer", href: "/cheer" },
    { name: "Dance", href: "/dance" },
  ],
};

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/about">About Us</MobileNavLink>
            <MobileNavLink href="/volleyball">Volleyball</MobileNavLink>
            <MobileNavLink href="/basketball">Basketball</MobileNavLink>
            <MobileNavLink href="/cheer">Cheer</MobileNavLink>
            <MobileNavLink href="/dance">Dance</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/contact">Contact Us</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-0  mx-40 transition-colors duration-300 ${!isScrolled ? "bg-transparent" : "bg-white shadow-md"}`}
      style={{
        borderRadius: "0 0 40px 40px",
      }}
    >
      <Box
        sx={{
          display: {
            sm: "none",
          },
          width: "100%",
          backgroundColor: "#0D7369",
          p: 1,
        }}
      >
        <Typography textAlign="center" variant="h6" color="white" fontSize={16}>
          Click here to purchase
        </Typography>
      </Box>
      <Container>
        <nav className="relative flex justify-between  px-5 py-3">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6 align-baseline">
              {headerNavigation.main.map((item) => (
                <div key={item.name}>
                  <NavLink href={item.href} isScrolled={isScrolled}>
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#F28907",
              }}
            >
              Contact
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
