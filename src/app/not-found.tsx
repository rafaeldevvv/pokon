import NotFoundLink from "@/components/NotFoundLink";
import NotFoundTitle from "@/components/NotFoundTitle";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto pt-header text-center">
      <div className="py-32 px-4">
        <NotFoundTitle />
        <p className="mb-4">
          The resource you&apos;re looking for is not available. Would you like to go
          to the homepage?
        </p>
        <NotFoundLink href="/">Let&apos;s go home</NotFoundLink>
      </div>
    </div>
  );
}
