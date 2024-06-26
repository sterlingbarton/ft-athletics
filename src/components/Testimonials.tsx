import Image from 'next/image';

import { Container } from '@/components/Container';

const testimonials = [
  [
    {
      content:
        "First Triumph Athletics gave me the skills and confidence I needed to excel in volleyball. Now, I'm excited to join the volleyball team at University this fall!",
      author: {
        name: 'Jenna Smith',
        role: 'Volleyball Player',
      },
    },
    {
      content:
        "Thanks to the dedicated coaches at First Triumph Athletics, I received a scholarship to play basketball at NWU. I couldn't be more grateful!",
      author: {
        name: 'Emma Johnson',
        role: 'Basketball Player',
      },
    },
  ],
  [
    {
      content:
        "The environment at First Triumph Athletics is incredibly supportive. I've improved so much as a volleyball player and made lifelong friends along the way.",
      author: {
        name: 'Sophia Lee',
        role: 'Volleyball Player',
      },
    },
    {
      content:
        "First Triumph Athletics not only helped me become a better basketball player but also taught me the importance of teamwork and perseverance. I'm thrilled to be playing at Central University next year.",
      author: {
        name: 'Olivia Brown',
        role: 'Basketball Player',
      },
    },
  ],
  [
    {
      content:
        "Joining First Triumph Athletics was the best decision I ever made. The coaches and staff are amazing, and I'm proud to be heading to SCU on a volleyball scholarship.",
      author: {
        name: 'Ava Davis',
        role: 'Volleyball Player',
      },
    },
    {
      content:
        "First Triumph Athletics provided me with top-notch training and support. I've grown so much as a player and person, and now I'm excited to play basketball at the collegiate level.",
      author: {
        name: 'Mia Martinez',
        role: 'Basketball Player',
      },
    },
  ],
];

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className=" max-w-2xl">
          <p className="mt-2 ml-4 font-semibold mb-2 text-6xl tracking-tight text-teal-600 sm:text-6xl">
            Athletic Programs
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We are dedicated to our athletes success, ensuring they excel both
            on and off the field
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
