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
            title="Youtube clone"
            des=" The YouTube backend project is built with the MERN stack, providing robust functionality for video uploading, streaming, and user management."
            src={projectOne}
            githubLink="https://github.com/Aditya8995/youtube-clone"
            webisteLink="https://frontend-playtube.vercel.app/"
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
            title="Movie-app"
            des="The movie search web project is a React app with Tailwind CSS that lets users search and view details about movies."
            src={projectFour}
            githubLink="https://github.com/Aditya8995/movie-search-web-app"
            webisteLink="https://movie-search-web-app-taupe.vercel.app/"
          />
          <ProjectsCard
            title="Feedback-app"
            des="The feedback app is a React application that enables users to submit and view feedback, featuring an interactive UI for easy user input and responsive design."
            src={projectFive}
            githubLink="https://github.com/Aditya8995/feedback-app"
            webisteLink=""
          />
          <ProjectsCard
            title="Budget App"
            des="Easily manage your finances with our React-powered budget app, ensuring every expense is tracked for better financial management."
            src={projectSix}
            githubLink=""
            webisteLink="https://budget-savvy.netlify.app/"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
