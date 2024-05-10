import { Container } from '@/components/Container';
import screenshotExpenses from '@/images/screenshots/expenses.png';
import screenshotPayroll from '@/images/screenshots/payroll.png';
import screenshotReporting from '@/images/screenshots/reporting.png';
import screenshotVatReturns from '@/images/screenshots/vat-returns.png';

const features = [
  {
    title: 'Volleyball',
    description: 'Expert coaching, competitive play, and skill development',
    image: screenshotPayroll,
  },
  {
    title: 'Basketball',
    description: 'Expert coaching, competitive play, and skill development',
    image: screenshotExpenses,
  },
  {
    title: 'Cheer',
    description: 'Expert coaching, competitive play, and skill development',
    image: screenshotVatReturns,
  },
  {
    title: 'Dance',
    description: 'Expert coaching, competitive play, and skill development',
    image: screenshotReporting,
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Sports we offer"
      className="relative overflow-hidden bg-white pt-20 sm:py-28"
    >
      <Container className="relative">
        <div>
          <p className="mt-2 ml-4 mb-2 text-3xl tracking-tight text-green-900 sm:text-4xl">
            Our Athletic Programs
          </p>
        </div>
        <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
              <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                {feature.title}
              </dd>
              <dd className="text-sm font-medium text-gray-700">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
