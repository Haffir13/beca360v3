export default function Page(){
return <main className="p-10 grid md:grid-cols-3 gap-6">
{[
['Plan 0','Explora oportunidades'],
['Plan 60','Docentes en vivo y preparación'],
['Institucional','Colegios y universidades']
].map(x=><div className="bg-white rounded-3xl shadow p-8" key={x[0]}>
<h2 className="text-3xl font-bold">{x[0]}</h2>
<p>{x[1]}</p>
</div>)}
</main>
}