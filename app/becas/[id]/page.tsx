import {becas} from '@/data/becas';

export default async function Page({params}:{params:Promise<{id:string}>}){
const {id}=await params;
const beca=becas.find(x=>x.id===id);

return <main className="p-10 max-w-5xl mx-auto">
<h1 className="text-4xl font-bold">{beca?.nombre}</h1>
<p className="mt-4">{beca?.descripcion}</p>
<h2 className="text-2xl font-bold mt-8">Requisitos</h2>
<ul>
{beca?.requisitos.map(x=><li key={x}>✓ {x}</li>)}
</ul>
</main>
}