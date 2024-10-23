"use client";

import { certificates } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="certificates" className="text-white py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Certificates</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Increase the height here to make it larger vertically */}
        <div className="h-[70vh] md:h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
