import Link from 'next/link';
export default function Navbar(){
return <nav className="p-6 bg-white shadow flex justify-between">
<h1 className="text-3xl font-black text-blue-600">🎓 BECA360</h1>
<div className="flex gap-5">
<Link href="/">Inicio</Link>
<Link href="/becas">Becas</Link>
<Link href="/planes">Planes</Link>
<Link href="/dashboard">Dashboard</Link>
</div>
</nav>
}