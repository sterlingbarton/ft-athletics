import { Container } from '@/components/Container';
import volleyballImg from '@/images/vball-1.jpeg';
import basketballImg from '@/images/bball-1.jpeg';
import cheerImg from '@/images/cheer.jpg';
import danceImg from '@/images/dance.jpg';
import Link from 'next/link';

const features = [
  {
    title: 'Volleyball',
    url: '/volleyball',
    image: volleyballImg,
  },
  {
    title: 'Basketball',
    url: '/basketball',
    image: basketballImg,
  },
  {
    title: 'Cheer',
    url: '/cheer',
    image: cheerImg,
  },
  {
    title: 'Dance',
    url: '/dance',
    image: danceImg,
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Sports we offer"
      className="relative overflow-hidden bg-white mt-48"
    >
      <Container className="relative">
        <div>
          <p className="mt-2 ml-4 font-semibold mb-2 text-6xl tracking-tight text-teal-600 sm:text-6xl">
            Athletic Programs
          </p>
        </div>
        <dl className="mx-auto mt-10 grid grid-cols-1 gap-8 bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.url}>
              <div
                className="relative flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-cover bg-center p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 text-center align-middle h-80"
                style={{ backgroundImage: `url(${feature.image.src})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center justify-end w-full h-full">
                  <p className="flex-none text-3xl font-bold tracking-tight text-white text-center">
                    {feature.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </dl>
      </Container>
    </section>
  );
}
