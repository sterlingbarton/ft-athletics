/* eslint-disable @next/next/no-img-element */
'use client';
import Coaches from '@/components/Coaches';
import TeamCalendar from '@/components/WomensCalendar';
import { Button } from '@/components/Button';
import bball from '@/images/bball-1.jpeg';
import bball2 from '@/images/bball-2.jpeg';
import womensTeam from '@/images/womensteam.jpeg';
import womens from '@/images/womens.jpeg';
import womensHero from '@/images/womenshero.webp';
import basketball from '@/images/basketball.png';

const dates = [
  { date: 'June 25', groups: ['10', '11', '12', '13', '14'] },
  { date: 'June 26', groups: ['10', '14', '15', '18'] },
  { date: 'July 12', groups: ['15', '16'] },
  { date: 'July 13', groups: ['17', '18'] },
];

const groupsPrint = (dates: any) => {
  const gatheredInfo = [];

  for (const item of dates) {
    for (const group of item.groups) {
      gatheredInfo.push(`${group}'s ,`);
    }
  }

  return gatheredInfo.join(' ');
};

export default function Basketball() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f28908] to-[#f89b29] opacity-40"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 xl:text-6xl">
                    First Triumph Athletics
                  </h1>
                  <h2 className="relative mt-6 text-4xl font-bold leading-8 text-gray-600 sm:max-w-md lg:max-w-none xl:text-5xl">
                    Women&apos;s Basketball Team
                  </h2>
                  <Button
                    href="/"
                    variant="solid"
                    className="px-8 py-3 mt-10 text-white"
                  >
                    {' '}
                    Register for the 24-25 tryouts
                  </Button>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={bball.src}
                        alt="Basketball player"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={bball2.src}
                        alt="Basketball player"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={womensTeam.src}
                        alt="Basketball player"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={womens.src}
                        alt="Basketball player"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={womensHero.src}
                        alt="Basketball player"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar section */}
        <TeamCalendar />

        {/* Content section */}
        <div className="mx-auto max-w-7xl md:px-8 sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-5xl font-bold tracking-tight text-green-500">
              Tryouts
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                  {dates.map((date) => (
                    <div
                      key={date.date}
                      className="flex flex-col bg-gray-400/5 p-8"
                    >
                      <dt className="text-sm font-semibold leading-6 text-gray-600">
                        {groupsPrint([date])}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                        {date.date}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src={basketball.src}
            alt="Basketball team celebrating"
            className="aspect-[4/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Coaches section */}
        <Coaches />
      </main>
    </div>
  );
}
