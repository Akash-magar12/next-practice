"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface Pokemon {
  name: string;
  url: string;
}

const Clientcomp = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen  text-white">
        <p className="text-xl animate-pulse">Loading Pokémon...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen  text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Pokémon Gallery ⚡
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {data.map((pokemon, index) => {
          // Extract Pokémon ID from URL
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`;

          return (
            <Link
              href={`/clientcomp/${pokemon.name}`}
              key={pokemon.name}
              className="group  rounded-2xl p-4 flex flex-col items-center shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src={image}
                  alt={pokemon.name}
                  className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="capitalize mt-3 text-lg font-semibold group-hover:text-yellow-400">
                {pokemon.name}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Clientcomp;
