import Hero from '@/components/Hero';
import ScholarshipCard from '@/components/ScholarshipCard';
import AIAnalyzer from '@/components/AIAnalyzer';
import {becas} from '@/data/becas';

export default function Home(){
 return <main>
  <Hero/>
  <section className="max-w-6xl mx-auto p-8">
   <h2 className="text-4xl font-bold mb-8">Becas destacadas</h2>
   <div className="grid md:grid-cols-3 gap-6">
    {becas.map(b=><ScholarshipCard key={b.id} beca={b}/>)}
   </div>
  </section>
  <AIAnalyzer/>
 </main>
}