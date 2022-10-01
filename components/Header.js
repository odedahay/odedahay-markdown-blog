import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-amber-50 text-gray-900 shadow w-full shadow-lg shadow-indigo-500/40">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
            <Link href='/'>
                <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
                    <img src='/images/logo.svg' width='220px' alt='Logo' />
                    {/* <span className="ml-3 text-xl">Ode Dahay</span> */}
                </a>
            </Link>
            <nav className="flex flex-wrap md:w-4/5 items center justify-end text-base md:ml-auto">
                <Link href='/'>
                    <a className="mx-5 font-bold cursor-pointer uppercase hover:text-amber-600">Home</a>
                </Link>
                <Link href='/blog'>
                    <a className="mx-5 font-bold cursor-pointer uppercase hover:text-amber-600">Blog</a>
                </Link>
                <Link href='/about'>
                    <a className="mx-5 font-bold cursor-pointer uppercase hover:text-amber-600">About</a>
                </Link>
            </nav>
        </div>
    </header>
  )
}
