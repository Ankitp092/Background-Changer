
import { useState } from 'react';

export default function App() 
{
 const [color, setColor] = useState("pink") 
return(
  <>
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}>
  
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blueviolet"}} onClick={()=>setColor("blueviolet")}>Blueviolet</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"aqua"}} onClick={()=>setColor("aqua")}>Aqua</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
    </div>

  </div>
  </div>
  </>
)
}
