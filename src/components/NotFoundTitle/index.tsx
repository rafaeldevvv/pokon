import Image from "next/image";

export default function NotFoundTitle() {
  return (
    <h2 className="mb-6">
      <span className="sr-only">404</span>
      <Image
        src="/404.png"
        width={300}
        height={150}
        alt=""
        className="mx-auto"
      />
    </h2>
  );
}
