import axios from "axios";
import Image from "next/image";

interface PokemonAbility {
  ability: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonSprites {
  other: {
    ["official-artwork"]: {
      front_default: string;
    };
  };
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = params;
  const result = await axios.get<PokemonData>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const pokemon = result.data;

  return (
    <main className="min-h-screen text-white flex flex-col items-center p-6">
      {/* Pokémon Name */}
      <h1 className="text-5xl font-extrabold capitalize mb-6 text-yellow-400 drop-shadow-lg">
        {pokemon.name}
      </h1>

      {/* Pokémon Image */}
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
      <section className="backdrop-blur-md border border-gray-700 p-6 rounded-2xl w-full max-w-md shadow-lg mb-10">
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
      </section>

      {/* Base Stats */}
      <section className="mt-10 w-full max-w-md p-6 rounded-2xl border border-gray-700 shadow-lg">
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
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${stat.base_stat}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
