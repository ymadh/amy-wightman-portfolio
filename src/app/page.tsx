import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Leadership } from '@/components/Leadership';
import { TechnicalSkills } from '@/components/TechnicalSkills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Experience />
      <Leadership />
      <TechnicalSkills />
      <Projects />
      <Contact />
    </main>
  );
}