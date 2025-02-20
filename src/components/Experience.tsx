import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Kabag IT"
            subTitle="PT BPR Prima( Agt 2024 - Sekarang )"
            result="Magelang"
            des="BPR PRIMA MAGELANG adalah Bank Perekonomian Rakyat yang telah beroperasi selama 26 tahun, berhasil menjadi salah satu bank yang Sehat, Unggul, dan Terpercaya bagi masyarakat, terbukti BPR Prima Magelang telah berperan serta dalam meningkatkan kesejahteraan masyarakat di Magelang dan sekitarnya"
          />
          <ResumeCard
            title="IT Leader Project"
            subTitle="CV. Angsae Baru - Bogor ( Nov 2023 - Mei 2024)"
            result="Bogor"
            des="CV. Angsae Baru is an IT Hardware company that provide best IT Solution, engaged in the maintenance of office equipment and MFD Printer"
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="PT Galva Technologies Tbk ( Jul 2019- May 2023 )"
            result="Jakarta Pusat"
            des="Galva Technologies adalah mitra regional yang terkemuka untuk produk elektronik, penyedia solusi yang melampaui ekspektasi. dengan berbagai penawaran produk, solusi sesuai segmen industri"
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Spesialist"
            subTitle="PT Galva Group( Jul 2015 - Jul 2019 )"
            result="Jakarta Pusat"
            des="Galva Technologies adalah mitra regional yang terkemuka untuk produk elektronik, penyedia solusi yang melampaui ekspektasi. dengan berbagai penawaran produk, solusi sesuai segmen industri"
          />
          <ResumeCard
            title="IT Staff"
            subTitle="PT. Samudra Teknindo Hydraumatic (Sep 2013 - Jun 2015)"
            result="Jakarta Barat"
            des="Perusahaan di indonseia sebagai salah satu pemain utama di Hydraulic dan Pneumatic sistem. "
          />
          <ResumeCard
            title="IT Support"
            subTitle="SupportPT. Dipo Angkasa Motor (Jun 2011 - Sep 2013)"
            result="Jakarta Pusat"
            des="Perusahaan yang bergerak di bidang Showroom dan Body Repair, Dealer Resmi Mercedes Benz."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
