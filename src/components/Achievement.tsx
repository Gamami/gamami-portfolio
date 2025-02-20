import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bank Cimb Niaga."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Bank Cimb Niaga yang terkoneksi di seluruh Kantor Pusat dan cabang Bank Cimb Niaga lebih dari 800 unit MFP lexmark yang terkoneksi dalam satu server"
          />
          <ResumeCard
            title="Bank Maybank."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Bank Maybank yang terkoneksi di seluruh Kantor Pusat dan cabang Bank Maybank lebih dari 500 unit MFP lexmark yang terkoneksi dalam satu server"
          />
          <ResumeCard
            title="Bank ICBC."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Bank Maybank yang terkoneksi di seluruh Kantor Pusat dan cabang Bank Maybank lebih dari 100 unit MFP lexmark yang terkoneksi dalam satu server LCFM"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bank Banten."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Bank Maybank yang terkoneksi di seluruh Kantor Pusat dan cabang Bank Maybank lebih dari 100 unit MFP lexmark yang terkoneksi dalam satu server LCFM"
          />
          <ResumeCard
            title="Mahkamah Agung."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Mahkamah Agung yang terkoneksi di seluruh Satker MA yang terdiri dari PTA,PT,PTTUN,MS,PM dll lebih dari 900 unit MFP lexmark yang terkoneksi dalam satu server LCFM"
          />
          <ResumeCard
            title="Kawan Lama Group."
            subTitle="Project MFP Lexmark."
            result="Success"
            des="Project MFP Lexmark di Kawan Lama Group yang terkoneksi di seluruh Kantor Pusat dan cabang lebih dari 50 unit MFP lexmark yang terkoneksi dalam satu server Papercut"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
