'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillIconProps {
  icon: LucideIcon;
  label: string;
  proficiency?: number; // 1-3
}

export default function SkillIcon({ icon: Icon, label, proficiency = 2 }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 hover:border-cyan-300/70 transition-all duration-300 group">
      <div className="relative">
        <Icon size={24} className="text-cyan-300 group-hover:text-cyan-200 transition-colors" />
        {proficiency && (
          <div className="absolute -bottom-1 -right-1 flex gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i < proficiency ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-foreground text-center line-clamp-2">{label}</span>
    </div>
  );
}
