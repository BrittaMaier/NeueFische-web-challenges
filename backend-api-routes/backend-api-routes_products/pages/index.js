import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/products", (url) =>
    fetch(url).then((response) => response.json())
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p>
            Price: {product.price}
            {product.currency}
          </p>
        </li>
      ))}
    </ul>
  );
}
