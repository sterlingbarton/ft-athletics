import React from 'react';

const womensDates = [
  { date: 'June 25', groups: ['10', '11', '12', '13', '14'] },
  { date: 'June 26', groups: ['10', '14', '15', '18'] },
  { date: 'July 12', groups: ['15', '16'] },
  { date: 'July 13', groups: ['17', '18'] },
];

export default function WomensTryouts({
  groupsPrint,
}: {
  groupsPrint: Function;
}) {
  return (
    <div className="mx-auto max-w-7xl md:px-8 sm:mt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-5xl font-bold tracking-tight text-green-500">
          Tryouts
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {womensDates.map((date) => (
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
  );
}
