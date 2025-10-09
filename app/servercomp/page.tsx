import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

const ServerComp = async () => {
  // Fetch data from PokeAPI
  const response = await axios.get<{ results: Pokemon[] }>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const pokemons = response.data.results;

  return (
    // <-- Add return here
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pokémon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pokemons.map((pokemon, index) => {
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`;

          return (
            <Link
              href={`/servercomp/${pokemon.name}`}
              key={pokemon.name}
              className="border p-4 rounded shadow hover:scale-105 transition-transform"
            >
              <Image
                src={imageUrl}
                alt={pokemon.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-center mt-2 capitalize font-medium">
                {pokemon.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServerComp;
