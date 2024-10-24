import Grid from "@/components/template/HomePage/Grid";
import Hero from "./Hero";
import RecentProject from "./RecentProject";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Grid />
      <RecentProject />
    </div>
  );
};

export default HomePage;
