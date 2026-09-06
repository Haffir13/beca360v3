import {becas} from '@/data/becas';
import ScholarshipCard from '@/components/ScholarshipCard';

export default function Page(){
return <main className="p-8 max-w-6xl mx-auto">
<h1 className="text-5xl font-bold mb-8">Explorar becas</h1>
<div className="grid md:grid-cols-3 gap-6">
{becas.map(b=><ScholarshipCard key={b.id} beca={b}/>)}
</div>
</main>
}