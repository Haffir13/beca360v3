'use client';
import {useState} from 'react';

export default function AIAnalyzer(){
const [show,setShow]=useState(false);
return <section className="bg-slate-900 text-white p-16 text-center">
<h2 className="text-4xl font-bold">Analiza tu perfil con IA</h2>
<button onClick={()=>setShow(true)} className="mt-8 bg-green-500 px-8 py-3 rounded-full">Analizar</button>
{show&&<p className="mt-5 text-2xl">UBC International Scholars - 95% compatibilidad</p>}
</section>
}