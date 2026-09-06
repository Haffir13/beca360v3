import Link from 'next/link';

export default function ScholarshipCard({beca}:any){
return <div className="bg-white rounded-3xl shadow p-6">
<h3 className="font-bold text-xl">{beca.nombre}</h3>
<p>{beca.pais}</p>
<p className="text-green-600 font-bold">{beca.compatibilidad}% compatible</p>
<Link className="text-blue-600" href={'/becas/'+beca.id}>Ver más →</Link>
</div>
}