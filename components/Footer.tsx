import { socialMedia } from "@/data";
import Image from "next/image"; // Importing Image from next/image
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
      <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="text-white flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:segniassaye2@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>
        <div className="text-white flex mt-16 md:flex-row flex-col justify-between">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Segni Assaye
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <a
                    key={info.id}
                    href={info.link} // Add the link for each social media
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image
                      src={info.img}
                      alt="social media icon"
                      width={20} // Set width
                      height={20} // Set height
                  />
                </a>
            ))}
          </div>
        </div>
      </footer>
  );
};

export default Footer;
