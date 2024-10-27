import Grid from "@/components/template/HomePage/Grid";
import Hero from "./Hero";
import RecentProject from "./RecentProject";
import Experience from "./Experience";
import Approach from "./Approach";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Grid />
      <RecentProject />
      <Experience />
      <Approach />
    </div>
  );
};

export default HomePage;
