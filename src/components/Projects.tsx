import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFour, projectFive, projectSix } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Crypto Website"
            des=" Coin Ranking is a platform where you can discover and save favorite cryptocurrencies. Built with React JS for a seamless experience."
            src={projectOne}
            githubLink="https://github.com/tyagiharsh607/CoinRanking"
            webisteLink="https://coin-ranking.netlify.app/"
          />
          <ProjectsCard
            title="Typingspeed-test"
            des="A typing speed test project , where users measure their typing accuracy and speed by completing timed typing tasks."
            src={projectTwo}
            githubLink="https://github.com/Aditya8995/Typingspeed-test"
            webisteLink="https://typingspeed-test-ten.vercel.app/"
          />
          <ProjectsCard
            title="recipe-search-web-app"
            des=" A recipe search web app that allows users to find recipe details using a search bar, designed with React and Tailwind CSS."
            src={projectThree}
            githubLink="https://github.com/Aditya8995/recipe-app-"
            webisteLink="https://recipe-app-ten-beta.vercel.app/"
          />
          <ProjectsCard
            title="Gym Website"
            des="Explore thousands of exercises, workouts, and fitness tips on our comprehensive gym website, designed to help you reach your fitness goals."
            src={projectFour}
            githubLink="https://github.com/tyagiharsh607/gym-app"
            webisteLink="https://myfitnessgymm.netlify.app/"
          />
          <ProjectsCard
            title="Photo Gallery"
            des="Discover a vast collection of images effortlessly with our intuitive image search engine, powered by JavaScript for seamless browsing."
            src={projectFive}
            githubLink="https://github.com/tyagiharsh607/Photon"
            webisteLink="https://photon-image-search.netlify.app/"
          />
          <ProjectsCard
            title="Budget App"
            des="Easily manage your finances with our React-powered budget app, ensuring every expense is tracked for better financial management."
            src={projectSix}
            githubLink="https://github.com/tyagiharsh607/budget-app"
            webisteLink="https://budget-savvy.netlify.app/"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
