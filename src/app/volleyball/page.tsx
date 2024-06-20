/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import VBallHero from '@/components/VBallHero';
import WomensCalendar from '@/components/WomensCalendar';
import MensCalendar from '@/components/MensCalendar';
import WomensTryouts from '@/components/WomensTryouts';
import MensTryouts from '@/components/MensTryouts';
import Coaches from '@/components/Coaches';
import cta5 from '@/images/cta5.png';
import mensvolleyhero from '@/images/mensvolleyhero.jpeg';

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

export default function Volleyball() {
  const [selected, setSelected] = useState<string>(options[1].name);

  const handleChange = (value: any) => {
    setSelected(value);
  };

  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <VBallHero selected={selected} />

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

        {/* Tryout section */}
        {selected === 'Women' ? (
          <WomensTryouts groupsPrint={groupsPrint} />
        ) : (
          <MensTryouts groupsPrint={groupsPrint} />
        )}

        {/* Image section */}
        {selected === 'Women' ? (
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src={cta5.src}
              alt="First Triumph Volleyball team"
              className="aspect-[4/2] w-full object-cover xl:rounded-3xl"
            />
          </div>
        ) : (
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src={mensvolleyhero.src}
              alt="Mens volleyball team in a huddle"
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>
        )}

        {/* Coaches section */}
        <Coaches />
      </main>
    </div>
  );
}
