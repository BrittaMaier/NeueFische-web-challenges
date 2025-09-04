import { introduction } from "@/data";
import { volumes } from "@/data";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Overview Page</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volumes, id) => {
            return (
              <li key={id}>
                <Link href={`/volumes/${volumes.slug}`}>{volumes.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
