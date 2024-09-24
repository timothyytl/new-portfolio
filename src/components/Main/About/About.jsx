const About = () => {
  return (
    <section className="h-[650px] bg-black grid grid-cols-[1fr,2fr,3fr]">
      <div className="flex flex-col justify-center ml-10">
        <h1 className="-rotate-90 text-md font-thin text-white uppercase tracking-[0.15rem]">
          About Me
        </h1>
      </div>
      <div className="flex items-center p-16">
        <h1 className="text-5xl font-extrabold text-white text-left">
          Now I Have A Perfect Way To Show My Work To Everyone In A Way That
          Reflects My Sense Of Creativity
        </h1>
      </div>
      <div className="flex items-center p-16 mx-36">
        <p className="text-white font-thin text-left leading-snug">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of text.
          <br />
          <br />
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin word.
        </p>
      </div>
    </section>
  )
}

export default About
