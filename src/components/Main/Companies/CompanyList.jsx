import image1 from "../../../assets/TL.png"

const CompanyList = () => {
  return (
    <section className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr] h-[220px] mx-40">
      <div className="flex justify-center items-center">
        <img
          src={image1}
          alt="image1"
          className="h-12 w-auto hover:bg-stone-300 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image1}
          alt="image1"
          className="h-12 w-auto hover:bg-stone-300 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image1}
          alt="image1"
          className="h-12 w-auto hover:bg-stone-300 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image1}
          alt="image1"
          className="h-12 w-auto hover:bg-stone-300 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image1}
          alt="image1"
          className="h-12 w-auto hover:bg-stone-300 transition ease-in-out duration-500"
        />
      </div>
    </section>
  )
}

export default CompanyList
