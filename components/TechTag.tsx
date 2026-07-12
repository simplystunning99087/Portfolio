import React from 'react';

interface TechTagProps {
  label: string;
  category?: 'language' | 'framework' | 'tool' | 'embedded';
}

const categoryColors = {
  language: 'bg-blue-500/20 text-blue-300 border-blue-400/50',
  framework: 'bg-purple-500/20 text-purple-300 border-purple-400/50',
  tool: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
  embedded: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
  default: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
};

export default function TechTag({ label, category }: TechTagProps) {
  const colorClass = category ? categoryColors[category] : categoryColors.default;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${colorClass}`}
    >
      {label}
    </span>
  );
}
