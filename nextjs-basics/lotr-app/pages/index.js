import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <h1>
          <Link href={`/volumes`}>Link to volume overview</Link>
        </h1>
      </main>
    </>
  );
}
