import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume1() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href={`/volumes`}>← All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book, id) => {
          return (
            <li key={id}>
              {book.ordinal}-{book.title}
            </li>
          );
        })}
      </ul>
      <Image src={data.cover} alt={data.title} width={140} height={230} />
      <br />
      <Link href={`/volumes/the-two-towers`}>Next Volume</Link>
    </>
  );
}
