import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="relative flex flex-col h-4/5 shrink-0 justify-center items-center md:px-12">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 sm:px-28 lg:px-52 pt-20 shadow-2xl ">
        <main className="mx-auto w-full max-w-md px-4">
          <p className="mt-20 text-sm font-medium lg:text-lg xl:text-xl text-gray-700">
            404
          </p>
          <h1 className="mt-3 text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900">
            Page not found
          </h1>
          <p className="mt-3 text-sm lg:text-md xl:text-lg text-gray-700">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button href="/" className="mt-8">
            Go back home
          </Button>
        </main>
      </div>
    </div>
  );
}
