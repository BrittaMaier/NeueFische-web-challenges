import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null;
  }

  let volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  if (volumeIndex === -1) {
    return <h1>Page not found</h1>;
  }
  let volume = volumes[volumeIndex];

  let nextIndex = volumes.length - 1 === volumeIndex ? 0 : volumeIndex + 1;

  let prevIndex = volumeIndex === 0 ? volumes.length - 1 : volumeIndex - 1;

  const prevVolume = volumes[prevIndex];
  const nextVolume = volumes[nextIndex];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {!!volumeIndex && (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>
            ← Previous Volume: {prevVolume.title}
          </Link>
        </div>
      )}
      {!!nextIndex && (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      )}
    </>
  );
}
