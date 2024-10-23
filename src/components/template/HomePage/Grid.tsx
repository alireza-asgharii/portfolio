import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

// type classNameType = Record<
//   number,
//   {
//     id: number;
//     className: string;
//   }
// >;

const Grid = () => {
  // const classNames: classNameType = {
  //   1: {
  //     id: 1,
  //     className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   },
  //   2: {
  //     id: 2,
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   },
  //   3: {
  //     id: 3,
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   },
  //   4: {
  //     id: 4,
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   },

  //   5: {
  //     id: 5,
  //     className: "md:col-span-3 md:row-span-2",
  //   },
  //   6: {
  //     id: 6,
  //     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   },
  // };
  return (
    <section id="about" className="">
      <BentoGrid className="grid">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            // className={classNames[item.id].className}
            className={item.className}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
