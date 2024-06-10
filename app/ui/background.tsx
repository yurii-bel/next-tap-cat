import Image from "next/image";
import catsBg from "../../public/bg-cats.jpg";

export default function Background() {
  return (
    <Image
      alt="Cats"
      src={catsBg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}
