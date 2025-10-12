"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// ✅ Define TypeScript interfaces for data
interface Ability {
  ability: { name: string };
}

interface Type {
  type: { name: string };
}

interface Stat {
  base_stat: number;
  stat: { name: string };
}

interface Sprites {
  other: {
    ["official-artwork"]: {
      front_default: string;
    };
  };
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
  sprites: Sprites;
}

const Page = () => {
  // ✅ Tell TypeScript this slug is a string
  const { slug } = useParams<{ slug: string }>();

  // ✅ Use proper type for Pokémon
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (!slug) return;

    axios
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => {
        setPokemon(res.data);
      });
  }, [slug]);

  if (!pokemon)
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p className="text-xl animate-pulse">Loading Pokémon details...</p>
      </div>
    );

  return (
    <main className="min-h-screen text-white p-6 flex flex-col items-center">
      {/* Pokémon Name */}
      <h1 className="text-5xl font-extrabold capitalize mb-6 text-yellow-400 drop-shadow-lg">
        {pokemon.name}
      </h1>

      {/* Image */}
      <div className="relative w-60 h-60 mb-8">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            "/fallback.png"
          }
          alt={pokemon.name}
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* Basic Info */}
      <div className="p-6 rounded-2xl w-full max-w-md shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-300">
          Basic Information
        </h2>

        <div className="grid grid-cols-2 gap-y-3 text-lg">
          <p>
            <span className="font-semibold text-gray-400">Height:</span>{" "}
            {pokemon.height / 10} m
          </p>
          <p>
            <span className="font-semibold text-gray-400">Weight:</span>{" "}
            {pokemon.weight / 10} kg
          </p>
          <p className="col-span-2">
            <span className="font-semibold text-gray-400">Abilities:</span>{" "}
            {pokemon.abilities
              .map((a) => a.ability.name)
              .join(", ")
              .replaceAll("-", " ")}
          </p>
          <p className="col-span-2">
            <span className="font-semibold text-gray-400">Type:</span>{" "}
            {pokemon.types
              .map((t) => t.type.name)
              .join(", ")
              .replaceAll("-", " ")}
          </p>
        </div>
      </div>

      {/* Base Stats */}
      <div className="mt-10 w-full max-w-md p-6 rounded-2xl border border-gray-700 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-300">
          Base Stats
        </h2>

        <div className="space-y-3">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name}>
              <div className="flex justify-between mb-1">
                <span className="capitalize text-gray-300">
                  {stat.stat.name.replace("-", " ")}
                </span>
                <span className="font-semibold text-yellow-400">
                  {stat.base_stat}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${stat.base_stat }%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
