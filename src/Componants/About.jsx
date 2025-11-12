import React from "react";

import { GiHotMeal, GiPriceTag, GiShop, GiTakeMyMoney } from "react-icons/gi";

import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-2 w-9/12 mx-auto mt-15 ">
        <div className="pr-8">
          <img
            src="/imgabout/5fb3a611e7fddfa36d124cb4c39db6b371966089.png"
            alt=""
            className="h-[736px] w-[646px] rounded-2xl"
          />
        </div>
        <div className="pt-20">
          <h2 className="font-bold text-2xl pb-5">Welcome to Nest</h2>
          <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="pb-5">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <div className="flex gap-5">
            <img
              src="/public/imgabout/c360e0d261dddc7b7beff7d493aa47bac5b77484.png"
              alt=""
              className="w-[193px] h-[236px] "
            />
            <img
              src="/public/imgabout/f8b0551749f0ed77ef6cc51a37e9e03515434576.png"
              alt=""
              className="w-[193px] h-[236px] "
            />
            <img
              src="/public/imgabout/b26bb39d2b9070f4e580b14c5b98b794e753d7f4.png"
              alt=""
              className="w-[193px] h-[236px] "
            />
          </div>
        </div>
      </div>

      <div className="py-12 bg-white text-gray-700">
        <div>
          <h2 className="font-bold text-3xl text-center mb-10">
            What We Provide?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiPriceTag className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Best Prices & Offers</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 2 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaHandHoldingDollar className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Wide Assortment</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 3 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <CiDeliveryTruck className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Free Delivery</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 4 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiShop className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Easy Returns</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 5 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiHotMeal className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">100% Satisfaction</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Card 6 */}
          <div className="text-center border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <GiTakeMyMoney className="text-6xl text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Great Daily Deal</h4>
            <p className="text-sm mb-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-9/12 mx-auto">
        <div>
          <img
            src="/imgabout/b2c379bf92038f828a2bf2ae708075d5f51de946.png"
            alt=""
            className="pr-8"
          />
        </div>
        <div className="pt-10">
          <h5 className="font-bold text-gray-400 pb-5">Our performance</h5>
          <h2 className="text-3xl font-semibold pb-5">
            Your Partner for e- <br />
            commerce grocery <br />
            solution
          </h2>
          <p>
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p className="pt-5">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 w-9/12 mx-auto pt-8">
        <div>
          <h4 className="font-bold text-2xl">Who we are</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-2xl">Our history</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-2xl">Our mission</h4>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellusb eros donec ac
            odio orci ultrices in.
          </p>
        </div>
      </div>

     <div className=" w-9/12 mx-auto">
      <h2 className="font-bold text-3xl text-center pt-15 pb-15">Our Team</h2>
       <div className="grid grid-cols-2 mr-8 -5">
        

        <div className="pr-8">
          <p className="text-blue-500 font-bold">Our Team</p>
          <h3 className="text-3xl pb-5">Meet Our Expert Team</h3>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <p className="pt-9">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <button>View All Members</button>
        </div>
        <div className="grid grid-cols-2 mr-4">
         <div className="pr-5">
           <img
            src="/imgabout/4ed7432b829fdf9e093f0e99b4ae2277883a9017.png"
            alt=""
            className="rounded-2xl"
          />
         </div>
         <div className="pr-5">
           <img
            src="/imgabout/affd58bf571556910fe6ef9c4f85379e59ba267e.png"
            alt=""
            className="rounded-2xl"
          />
         </div>
        </div>
      </div>
     </div>


     <div className="w-9/12 mx-auto pt-20 pb-20">
      <img src="/imgabout/Footer.png" alt="" />
     </div>
    </>
  );
}
