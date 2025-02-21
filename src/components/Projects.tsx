import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectThree,
  projectTwo,
  projectFour,
  projectFive,
  projectSix,
} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="KUNJUNGI PORTOFOLIO SAYA" des="Proyek Saya" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="WEBSITE BANK BPR Prima"
            des=" Website Bank BPR Prima V1 yang di bangun menggunakan bahasa pemograman Typescript yang responsive "
            src={projectOne}
          />
          <ProjectsCard
            title="WEBSITE BANK BPR Prima"
            des=" Website Bank BPR Prima V2 yang di bangun menggunakan bahasa pemograman Javascript yang responsive"
            src={projectTwo}
          />
          <ProjectsCard
            title="WEBSITE BANK BPR Prima"
            des=" Website Bank BPR Prima V2 yang di bangun menggunakan Wordpress dan beberapa plugin yang responsive https://bprprimamagelang.com/"
            src={projectThree}
          />
          <ProjectsCard
            title="WEBSITE BANK BPR Prima"
            des=" Website Bank BPR Prima V2 yang di bangun menggunakan bahasa pemograman react.s dan boostrap yang responsive"
            src={projectFour}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Website E-commerce yang di bangun menggunakan MERN (MongoDB, Express.js, React.js, Node.js) dengan beberpa feature seperti Login dan Payment menggunakan midtrans"
            src={projectFive}
          />
          <ProjectsCard
            title="Portfolio Pencapaian Sales"
            des=" Website Portfolio Pencapaian Sales yang di bangun menggunakan MERN (MongoDB, Express.js, React.js, Node.js) dengan beberpa feature seperti Login , Grafik, dan pencapian sales month "
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
