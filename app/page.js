"use client";
import Image from "next/image";
import Card from "./component/card";

export default function Home() {
  return (
    <>
      <main className=" flex min-h-screen flex-col items-center justify-between banner-section bg-white">
        <Image
          src="/assets/2148972878.jpg"
          className="w-full"
          width={100}
          height={100}
          quality={100}
          alt="lalla"
          unoptimized
        ></Image>
        <section className="flex justify-center flex-auto gap-5 p-6 container">
          <div className="">
            <p className="font-bold">
              The most advanced organic waste and food waste recycling solution
              in the world
            </p>
            <p className="sm:text-justify">
              Organicco is an innovative and modern biotechnology company
              specialising in{" "}
              <strong>
                <i>organic and food waste recycling</i>
              </strong>
              ,{" "}
              <strong>
                <i>waste to energy</i>
              </strong>
              ,{" "}
              <strong>
                <i>organic fertiliser</i>
              </strong>
              , and{" "}
              <strong>
                <i>sustainable engineering consultancy</i>
              </strong>{" "}
              services.
            </p>
            <br />
            <p>
              Our business offers affordable technology for solving escalating
              food security problems. The main focus concentrates on
              decarbonisation whilst reducing costs and providing environmental
              benefits for all.
            </p>
            <br />
            <p>
              This has been achieved with the continuous development of
              Organicco’s closed-loop solution where we waste nothing. Depending
              on the input material our technologies convert organic waste into
              other useful resources, such as fertiliser, animal feed, animal
              protein meal, electricity, heat, steam, grey water, fuel, and
              compressed CO2 i.e., the input material is recycled into a
              commodity with financial value.
            </p>
            <h3 className="text-xl font-bold my-4">Empowering Businesses</h3>

            <p>
              Organicco provides solutions for empowering businesses to divert
              waste away from expensive traditional disposal options whilst
              helping them meet their net-zero targets. Organicco has
              specifically designed a range of products to convert waste into
              natural assets.
            </p>
          </div>
        </section>

        <section className="container">
          <div>
            <h1 className="text-2xl font-bold my-10 text-center">
              Featured Products
            </h1>
          </div>
          <div className="flex flex-row container gap-5 flex-wrap align-center justify-center flex-auto">
            <div className="flip-card rounded-xl w">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="flip-card rounded-xl">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="flip-card rounded-xl">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold my-10 text-center">
            Featured Solutions
          </h1>
        </section>

        <section className="container">
          <div>
            <h1 className="text-2xl font-bold my-10 text-center">
              Featured Products
            </h1>
          </div>
          <div className="flex flex-row container gap-5 flex-wrap align-center justify-center flex-auto">
            <div className="flip-card rounded-xl w">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="flip-card rounded-xl">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="flip-card rounded-xl">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div className="flip-card rounded-xl">
              <div className="flip-card-inner rounded-xl bg-white">
                <div className="flip-card-front rounded-xl bg-white">
                  <Image
                    className="w-full  rounded-t-xl"
                    src="/assets/ecohero-loctroi-1.jpg"
                    width={100}
                    height={100}
                    alt="Avatar"
                    unoptimized
                  ></Image>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
                <div className="flip-card-back rounded-xl p-5">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black w-screen  p-24 mt-10">
          <div className="container bg-white mx-auto p-10">
            <h1 className="text-2xl font-bold my-10 text-center">
              News and Blogs
            </h1>
            <a href="">
              <strong>Climate change is a scientifically proven fact!</strong>
            </a>
            <p className="text-justify">
              As the world slowly reacts to the environmental Armageddon it has
              created for itself it is imperative that urgent action is
              undertaken. The time for sitting on our hands and leaving it to
              others has long past its sell by date. We are all responsible for
              our actions and can and must contribute to solving the problems
              whilst there is still time to make a difference.
            </p>
            <button className="btn bg-black text-white p-2 rounded-sm my-5">
              Read More
            </button>
          </div>
        </section>

        <div>
          <Card />
          <h1>here i am </h1>
        </div>
      </main>
      <p>
        Copyright © 2024 Material Tailwind by Creative Tim. Made with ❤️ for a
        better web.
      </p>
    </>
  );
}
