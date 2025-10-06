import Image from "next/image";
import seen from "../../public/seen.jpg";
export const metadata = {
  title: "Image Gallery",
  description: "Browse stunning images in our gallery section.",
};
const Imaged = () => {
  return (
    <div className="">
      <h1 className="mb-4">This is image</h1>
      <Image
        src={seen}
        alt="Seen image"
        width={500}
        height={500}
        priority
        placeholder="blur"
        className="rounded-xl w-1/2 h-auto"
      />
    </div>
  );
};

export default Imaged;
