import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="type-2">Page Not Found</h1>
      <p className="lead max-w-[420px]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn btn-outline">
        Back Home
      </Link>
    </div>
  );
}
