import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";
import img1 from "@/images/cta1.jpg";
import img2 from "@/images/cta2.jpg";
import img3 from "@/images/cta3.jpg";
import img4 from "@/images/cta4.png";
import img5 from "@/images/cta5.png";
import img6 from "@/images/cta6.png";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-teal-700"
    >
      <div className="bg-white">
        <div className="overflow-hidden pt-32 sm:pt-14">
          <div className="bg-teal-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative pb-16 pt-48 sm:pb-24">
                <div>
                  <h2
                    id="sale-heading"
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    First Triumph Athletics
                    <br />
                    Houston, Texas
                  </h2>
                  <div
                    className="mt-6 text-base"
                    style={{
                      color: "#FBA603ff",
                    }}
                  >
                    <a href="#" className="font-semibold">
                      Learn More
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img1}
                          alt=""
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img2}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img6}
                          alt=""
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img3}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img4}
                          alt=""
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={img5}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
