import Link from "next/link"
export default function Header() {
    return (
        <div  className="bg-slate-300">
            <ul className="flex place-content-center ">
                <li className="m-5 text-black-100 text-lg font-bold"> <Link href = "/">Home</Link></li>
                <li className="m-5 text-black-100 text-lg font-bold"> <Link href = "../portfolio">Portfolio</Link></li>
                <li className="m-5 text-black-100 text-lg font-bold"> <Link href = "../about">About</Link></li>
                <li className="m-5 text-black-100 text-lg font-bold"> <Link href = "../contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}