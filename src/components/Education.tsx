import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">History Pendidikan</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="STMIK Jayakarta"
            subTitle="Teknik Informatika (2009 - 2015)"
            result="2,75/4"
            des="Universitas adalah suatu institusi pendidikan tinggi dan penelitian, yang memberikan gelar akademis dalam berbagai bidang. Sebuah universitas menyediakan pendidikan sarjana dan pascasarjana."
          />
          <ResumeCard
            title=" SMA Negeri 1 Randudongkal "
            subTitle="Jurusan IPA (2004 - 2007)"
            result="4.25/5"
            des="Sekolah Menengah Atas (disingkat SMA), adalah jenjang pendidikan menengah pada pendidikan formal di Indonesia setelah lulus Sekolah Menengah Pertama (atau sederajat). "
          />
          <ResumeCard
            title=" MTs Negeri 1 Pemalang "
            subTitle="Madrasah Tsanawiyah (2000 - 2004)"
            result="4.00/5"
            des="Madrasah Tsanawiyah (disingkat MTs) adalah jenjang dasar pada pendidikan formal di Indonesia, setara dengan Sekolah Menengah Pertama, yang pengelolaannya dilakukan oleh Departemen Agama."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
