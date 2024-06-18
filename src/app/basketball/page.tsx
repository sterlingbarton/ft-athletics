/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
// import RadioGroup from '@/components/RadioGroup';
import WomensCalendar from '@/components/WomensCalendar';
import MensCalendar from '@/components/MensCalendar';
import WomensTryouts from '@/components/WomensTryouts';
import Coaches from '@/components/Coaches';
import { Button } from '@/components/Button';
import basketball from '@/images/basketball.png';
import bball from '@/images/bball-1.jpeg';
import bball2 from '@/images/bball-2.jpeg';
import MensTryouts from '@/components/MensTryouts';

type Option = {
  name: string;
};

const options: Option[] = [{ name: 'Men' }, { name: 'Women' }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const groupsPrint = (dates: any) => {
  const gatheredInfo = [];

  for (const item of dates) {
    for (const group of item.groups) {
      gatheredInfo.push(`${group}'s ,`);
    }
  }

  return gatheredInfo.join(' ');
};

export default function Example() {
  const [selected, setSelected] = useState<string>(options[1].name);

  const handleChange = (value: any) => {
    setSelected(value);
  };

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
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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
                    {`${selected}'s Basketball Team`}
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
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={bball2.src}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
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

        {/* Radio Group section */}
        <fieldset aria-label="Choose a gender option">
          <div className="flex justify-center">
            <RadioGroup
              value={selected}
              onChange={handleChange}
              className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-2 w-7/12 max-w-screen-md"
            >
              {options.map((option) => (
                <RadioGroup.Option
                  key={option.name}
                  value={option.name}
                  className={({ active, checked }) =>
                    classNames(
                      active ? 'ring-2 ring-orange-600 ring-offset-2' : '',
                      checked
                        ? 'bg-orange-600 text-white hover:bg-orange-500'
                        : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
                      'flex items-center justify-center rounded-md px-3 py-3 text-sm font-semibold uppercase sm:flex-1'
                    )
                  }
                >
                  {`${option.name}'s`}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </fieldset>

        {/* Calendar section */}
        {selected === 'Women' ? <WomensCalendar /> : <MensCalendar />}

        {/* Content section */}
        {selected === 'Women' ? (
          <WomensTryouts groupsPrint={groupsPrint} />
        ) : (
          <MensTryouts groupsPrint={groupsPrint} />
        )}

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
