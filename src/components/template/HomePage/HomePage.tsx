import Grid from "@/components/template/HomePage/Grid";
import Hero from "./Hero";
import RecentProject from "./RecentProject";
import Experience from "./Experience";
import Approach from "./Approach";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Grid />
      <RecentProject />
      <Experience />
      <Approach />
      <Footer />
    </div>
  );
};

export default HomePage;
