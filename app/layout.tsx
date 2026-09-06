import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata={
 title:'BECA360',
 description:'Plataforma inteligente de becas'
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="es"><body><Navbar/>{children}<Footer/></body></html>
}