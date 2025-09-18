import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`api/products/${id}`, (url) =>
    fetch(url).then((response) => response.json())
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  return (
    <>
      <h1>{data.name}</h1>
      <p>Category: {data.category}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
    </>
  );
}
