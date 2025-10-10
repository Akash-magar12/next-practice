"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!slug) return;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`).then((res) => {
      setPokemon(res.data);
    });
  }, [slug]);

  if (!pokemon) return <p>Loading...</p>;

  return <div>{pokemon.name}</div>;
};

export default Page;
