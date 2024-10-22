import Image from "next/image";
import Subhan from "./subhan.jpg"
export default function Home() {
  return (
    <div className = "box flex bg-black">
    <div className="box1  flex-auto w-55 ml-8 mt-4 text-xl">
    <samp className="text-cyan-300 font-bold">NAME</samp>
    <h1 className="text-blue-100 italic">Subhan Ghafoor</h1>
    <samp className="text-cyan-300 font-bold">Email Address</samp>
    <h1 className="text-blue-100 italic">subhanladla93@gmail.com</h1>
    <samp className="text-cyan-300 font-bold">GIT Repository</samp>
    <h1 className="text-blue-100 italic"><a href="https://github.com/subhanbaloch18">subhanbaloch18</a></h1>
    <samp className="text-cyan-300 font-bold">Linkedin Id</samp>
    <h1 className="text-blue-100 italic"><a href="Subhan Ghafoor"></a>Subhan Ghafoor</h1>
      </div> 

      <div className="box2 flex mr-3">
        <Image src={Subhan} alt="img" width={200} className="h-40 mt-3"/>
        </div>

  </div>
)};