import Grid from "@/components/template/HomePage/Grid";
import Hero from "./Hero";
import RecentProject from "./RecentProject";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Grid />
      <RecentProject />
      <Experience />
    </div>
  );
};

export default HomePage;
