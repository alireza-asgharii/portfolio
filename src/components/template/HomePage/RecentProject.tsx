/* eslint-disable @next/next/no-img-element */
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h3 className="text-5xl">
          A small selection of
          <span className="text-purple-400"> recent projects</span>
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full p-2 gap-16 gap-x-20 mt-10">
        {projects.map(({ des, iconLists, id, img, link, title }) => (
          <div
            className="max-sm:mt-4 lg:min-h-[36.5rem] h-[25rem] flex items-center justify-center sm:w-[550px] w-[80vw]"
            key={id}
          >
            <PinContainer title="visit" href={link} className="p-3">
              <div className="relative rounded-2xl flex items-center justify-center sm:w-[550px] w-[80vw] overflow-hidden h-[35vh] lg:h-[36vh] mb-10 object-cover">
                <img
                  src={img}
                  alt="cover"
                  className="h-full w-full object-cover"
                />
                {/* <div className="z-10  flex justify-center items-center overflow-hidden "></div> */}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 min-h-16"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProject;
