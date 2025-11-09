import React from 'react';

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const CharacterCard = ({ name, role, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-rose-500/30 via-fuchsia-500/30 to-indigo-500/30">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-black tracking-wider text-white/90 drop-shadow">{getInitials(name)}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white/95">{name}</h3>
        {role && <p className="mt-0.5 text-sm text-white/60">{role}</p>}
        <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
};

export default CharacterCard;
