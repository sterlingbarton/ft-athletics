import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

type option = {
  name: string;
};

const options: option[] = [{ name: 'Mens' }, { name: 'Womens' }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState<option>(options[2]);

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="flex justify-center">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-2 w-7/12 max-w-screen-md"
        >
          {options.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
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
              {option.name}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </fieldset>
  );
}
