import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";

export default function Product() {
  const [showEditForm, setShowEditForm] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate, error } = useSWR(`/api/products/${id}`);
  console.log(error);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  async function handleEditProduct(product) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      console.log(response.json());
      setShowEditForm(false);
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button
        onClick={() => {
          setShowEditForm(!showEditForm);
        }}
      >
        <span role="img" aria-label="A pencil">
          ✏️
        </span>
      </button>
      <button onClick={handleDeleteProduct} disabled={showEditForm}>
        <span role="img" aria-label="A cross indicating deletion">
          ❌
        </span>
      </button>
      {showEditForm && <ProductForm onSubmit={handleEditProduct} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
