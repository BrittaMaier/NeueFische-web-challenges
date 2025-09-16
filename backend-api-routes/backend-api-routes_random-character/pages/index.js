import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", (url) =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!data) {
    return <h1>Data is undefined</h1>;
  }
  return (
    <>
      <h1>Random Character</h1>
      <ul>
        <li>First Name: {data.firstName}</li>
        <li>Last Name: {data.lastName}</li>
        <li>Twitter Name: {data.twitterName}</li>
        <li>Geohash: {data.geohash}</li>
      </ul>
    </>
  );
}
