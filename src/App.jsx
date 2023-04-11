import { useState } from "react"
import Waifus from "./components/Waifus"
import Portada from "./components/Portada"
import Chat from "./components/Chat"
import Planes from "./components/Planes"

export default function App() {
  const [waifu, setWaifu] = useState("")
  
  return (
    <main className="principal">
      <Portada/>
      <Waifus setWaifu={setWaifu}/>
      <Chat waifu={waifu}/>
      <Planes />
    </main>
  )
}
