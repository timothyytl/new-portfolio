import project1 from "../../../assets/ecomm-store.png"
import project2 from "../../../assets/airbnb.png"
import project3 from "../../../assets/todo-app.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel"

const MyProject = ({ reference }) => {
  return (
    <section ref={reference} className="h-[650px] grid grid-cols-[1fr,2fr,3fr]">
      <div className="flex flex-col justify-center ml-10">
        <h1 className="-rotate-90 text-md font-thin uppercase tracking-[0.15rem]">
          My Projects
        </h1>
      </div>
      <div className="flex flex-col justify-center px-10">
        <h6 className="text-stone-400 text-left py-10">01/04</h6>
        <h1 className="text-5xl font-extrabold text-left">
          Decentralized <br /> Platform App
        </h1>
        <p className="text-left font-thin text-stone-400 my-10 pr-48">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have humour, or randomised words which don&apos;t look
          even slightly believable.
        </p>
      </div>
      <div className="flex items-center pr-36">
        <Carousel className="max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <img src={project1} alt="project-1" className="border" />
            </CarouselItem>
            <CarouselItem>
              <img src={project2} alt="project-1" className="border" />
            </CarouselItem>
            <CarouselItem>
              <img src={project3} alt="project-1" className="border" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default MyProject
