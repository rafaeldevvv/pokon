import { NotFoundTitle, NotFoundLink } from "@/components";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto pt-header text-center">
      <div className="py-32 px-4">
        <NotFoundTitle />
        <p className="mb-4">
          The resource you're looking for is not available. Would you like to go
          to the homepage?
        </p>
        <NotFoundLink href="/">Let's go home</NotFoundLink>
      </div>
    </div>
  );
}
