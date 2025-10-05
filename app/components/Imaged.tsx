import Image from "next/image";
import seen from "../../public/seen.jpg";
const Imaged = () => {
  return (
    <div>
      {/* <img src="/seen.jpg" alt="" /> */}
      <Image
        src={seen}
        alt="Seen image"
        width={500}
        height={500}
        priority
        placeholder="blur"
        className="rounded-xl w-full h-auto"
        blurDataURL=""
      />
    </div>
  );
};

export default Imaged;
