const Skills = () => {
  return (
    <section className="h-[600px] bg-black grid grid-cols-[1fr,2fr,3fr]">
      <div className="flex flex-col justify-center ml-10">
        <h1 className="-rotate-90 text-md font-thin text-white uppercase tracking-[0.15rem]">
          My Skills & Service
        </h1>
      </div>
      <div className="flex flex-col justify-center p-32 text-white font-thin list-none text-left leading-relaxed">
        {/* <h1 className="text-5xl font-extrabold text-white text-left">
          Now I Have A Perfect Way To Show My Work To Everyone In A Way That
          Reflects My Sense Of Creativity
        </h1> */}
        <li>Front End</li>
        <li>ReactJs</li>
        <li>Javascript</li>
        <li>Back End</li>
        <li>NodeJS</li>
        <li>CSS</li>
        <li>Google Cloud</li>
      </div>
      <div className="flex flex-col justify-center items-start mr-36 text-white">
        <p className="text-2xl font-sans text-left leading-normal">
          I&apos;ve always been drawn to the overlap between design and
          development. My skills are broad: from ux to design, front end to back
          end development. I enjoy each aspect, and love building sites & mobile
          apps from start to finish, for clients all over the world.
        </p>
        <br />
        <p>Timothy Lim</p>
      </div>
    </section>
  )
}

export default Skills
