import { introduction } from "@/data";
import { volumes } from "@/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href={`/the-fellowship-of-the-ring`}>{volumes[0].title}</Link>
        </li>
        <li>
          <Link href={`/the-return-of-the-king`}>{volumes[1].title} </Link>
        </li>
        <li>
          <Link href={`/the-two-towers`}>{volumes[2].title} </Link>
        </li>
      </ul>
    </div>
  );
}
