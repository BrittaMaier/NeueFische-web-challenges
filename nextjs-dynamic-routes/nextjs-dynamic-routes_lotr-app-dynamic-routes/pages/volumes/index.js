import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  /*ToDo:
  - create button to navigate to random page
  - render a button 
  - handle the onClick event on the button
  - onClick we want to navigate to a random page
  - on the onClick generate a url to a random volume
  - grab random volume*/
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandom() {
    const randomVolume = getRandomElement(volumes);
    const newUrl = `/volumes/${randomVolume.slug}`;
    router.push(newUrl);
    console.log("random Volume:", randomVolume);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
      <button type="button" onClick={handleRandom}>
        Go to random volume
      </button>
    </>
  );
}
