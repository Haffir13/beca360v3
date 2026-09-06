'use client';
import {motion} from 'framer-motion';

export default function Hero(){
return <section className="p-20 bg-gradient-to-r from-blue-100 to-white">
<motion.div initial={{opacity:0}} animate={{opacity:1}}>
<h1 className="text-6xl font-black">Encuentra la beca que va contigo</h1>
<p className="text-xl mt-5">Inteligencia artificial y preparación personalizada para alcanzar oportunidades internacionales.</p>
</motion.div>
</section>
}