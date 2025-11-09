import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  {
    name: 'Pennywise the Dancing Clown',
    role: 'Ancient cosmic entity',
    description:
      "A malevolent shape-shifter feeding on fear. Often appears as a clown, luring victims with charm before revealing its true horror.",
    image:
      'https://images.unsplash.com/photo-1549383021-8b529492ed92?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Bill Denbrough',
    role: 'Leader of the Losers Club',
    description:
      'Haunted by the loss of his brother Georgie, Bill is courageous and determined, guiding the group through Derry’s darkest secrets.',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Beverly Marsh',
    role: 'Fearless and compassionate',
    description:
      'Beverly endures hardship but finds strength with the Losers. She is brave, empathetic, and key to the group’s unity.',
    image:
      'https://images.unsplash.com/photo-1520975624749-58a3a0889b7f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Richie Tozier',
    role: 'The comic relief',
    description:
      "Quick-witted and loud, Richie masks fear with humor. Loyal to his friends and courageous when it matters most.",
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Eddie Kaspbrak',
    role: 'Anxious but brave',
    description:
      "Raised with fear, Eddie learns to conquer it. His loyalty and courage shine when facing the unimaginable.",
    image:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Ben Hanscom',
    role: 'The heart and historian',
    description:
      'Thoughtful and kind, Ben’s research uncovers Derry’s secrets. His creativity and heart keep the group grounded.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Mike Hanlon',
    role: 'The memory keeper',
    description:
      'As the group’s historian in adulthood, Mike calls the Losers back to Derry and helps them remember their past.',
    image:
      'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Stanley Uris',
    role: 'Methodical and sincere',
    description:
      'Logical and careful, Stan is deeply affected by fear. His story underscores the weight of their shared trauma.',
    image:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop',
  },
];

const CharacterGrid = () => {
  return (
    <section id="characters" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Characters of Derry</h2>
            <p className="mt-2 text-sm text-white/70">
              Meet the Losers Club and the evil that binds them together.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((c) => (
            <CharacterCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterGrid;
