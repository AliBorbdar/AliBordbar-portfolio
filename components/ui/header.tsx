import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import UserImg from "@/public/images/AliBordbar-image.png";
import HeaderImg01 from "@/public/images/header-image-01.png";
import HeaderImg03 from "@/public/images/header-image-03.png";
// import HeaderImg03 from "@/public/images/header-image-03.jpg";
export default function Hedaer() {
  return <header className="text-center pt-6">
    <ThemeToggle />
    {/* intro  */}
    <div className="mb-10">
      <Image className="inline-flex rounded-full shadow-lg mb-4" src={UserImg} alt="AliBordbar" width={96} height={96} priority />
      <div className="mb-5">
        <h1 className="font-Bold text-gray-800 dark:text-gray-100 text-2xl mb-1">Ali Bordbar

        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Just a Junior Frontend Developer
        </p>
      </div>
      <a href="#" className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] mb-4">
        Work Mode: Activated
      </a>
      <div className="group flex justify-center gap-4">
        <Image className="rounded-xl even:rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bazier(.5,.85,.25,1.8)] shadow-lg  " src={HeaderImg01} alt="Chess-Picture" width={245} height={160} priority />
        <Image src={HeaderImg03} className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg" alt="Tehran-Picture" width={245} height={160} priority />
      </div>


    </div>
  </header>
}