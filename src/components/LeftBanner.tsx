import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiHtml5 } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "IT Specialist.",
      "Junior Full Stack Developer.",
      "Junior Front-End Web Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-md font-normal">
          SELAMAT DATANG DI PORTOFOLIO SAYA
        </h4> */}
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-titleFont tracking-wide text-white"
        >
          Hi, I'm
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-6xl lgl:text-4xl font-titleFont font-bold flex flex-col"
        >
          <span className="text-6xl text-designColor capitalize">
            Ghozali Amami
          </span>
        </motion.h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Halo, Saya seorang Junior Programmer yang passionate dalam dunia
          coding dan teknologi. Saya suka membangun aplikasi dengan bebrapa
          teknologi bahasa pemograman dan terus belajar hal baru dalam dunia
          pengembangan software. Saya selalu antusias untuk belajar teknologi
          baru dan berkontribusi dalam tim yang dinamis.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/g_amami?utm_source=qr&igsh=ZnU4Z2xuZDNwYnRv/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ghozali-amami-b709451a1/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://www.facebook.com/GhozaliAmami?locale=id_ID"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
