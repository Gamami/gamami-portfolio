import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ghozali Amami</h3>
        <p className="text-lg font-normal text-gray-400">
          Junior Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Perkenalkan nama saya Ghozali Amami, Bapak/Ibu bisa memanggil saya
          Ghozali. Umur saya saat ini 35 Tahun dan berasal dari kota Magelang,
          Saya sudah berkeluarga dan di karuniai seorang Putra yang berumur 4
          tahun 5 bulan.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+62 87888600494</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">gamami88@gmail.com</span>
        </p>
      </div>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <a href="https://www.facebook.com/GhozaliAmami?locale=id_ID">
            <FaFacebookF />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://www.instagram.com/g_amami?utm_source=qr&igsh=ZnU4Z2xuZDNwYnRv/">
            <FaInstagram />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ghozali-amami-b709451a1/">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactLeft;
