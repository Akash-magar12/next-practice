import Image from "next/image";
import seen from "../../public/seen.jpg";

const Imaged = () => {
  return (
    <div className="">
      <Image
        src={seen}
        alt="Seen image"
        width={500}
        height={500}
        priority
        placeholder="blur"
        className="rounded-xl w-full h-auto"
      />
    </div>
  );
};

export default Imaged;
