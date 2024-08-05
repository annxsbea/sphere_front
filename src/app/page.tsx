import Image from "next/image";
import { Login } from "./public/Login";
import Rodape from "./components/rodape";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
    
     <Login/>
     <Rodape />
    </main>
  );
}
