import { AboutHero } from '@/components/about/AboutHero';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutTeam } from '@/components/about/AboutTeam';
import { AboutStats } from '@/components/about/AboutStats';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós - ArenaHosting',
  description: 'Conheça a ArenaHosting: nossa história, missão, valores e equipe especializada em hospedagem premium.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}