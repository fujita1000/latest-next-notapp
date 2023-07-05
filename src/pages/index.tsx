import Image from "next/image"

export default function Home() {
  return (
    <div className="relative w-[211px] m-auto mt-[150px]">
      <div className="m-auto">
        <div className="absolute">
          <Image src={"home.svg"} width={80} height={80} alt="home" />
        </div>
        <div className="absolute left-[34px] top-[57px]">
          <Image src={"works.svg"} width={80} height={80} alt="works" />
        </div>
        <div className="absolute left-[100px] top-[57px]">
          <Image src={"skills.svg"} width={80} height={80} alt="skills" />
        </div>
        <div className="absolute left-[132px]">
          <Image src={"contact.svg"} width={80} height={80} alt="contact" />
        </div>
      </div>
    </div>
  );
}
