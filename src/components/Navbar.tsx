import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import NavbarIcons from "./NavbarIcons";
import alif from "../../public/alif.png";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 sticky top-0 bg-white z-50">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Menu />
        <Link href="/">
          <div className="flex gap-2 text-2xl tracking-wide">
            {/* <p className="text-2xl">ᴀʟɪꜰᴀᴛᴛᴀʀᴡᴀʟᴀ</p> */}
            <p className="text-2xl">ＡＬＩＦ ＡＴＴＡＲＷＡＬＡ</p>
            {/* <Image
              width={200}
              height={200}
              src="/aliflogo.png"
              alt="ALIF ATTARWALA"
            /> */}
          </div>
        </Link>
        <div className="flex gap-5">
          <NavbarIcons />
        </div>
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image src="/alif.png" alt="" width={40} height={40} /> */}
            <div className="text-2xl tracking-wide">
              {/* <p>ᴀʟɪꜰᴀᴛᴛᴀʀᴡᴀʟᴀ</p> */}
              <p>ＡＬＩＦ ＡＴＴＡＲＷＡＬＡ</p>
              {/* <Image
                width={200}
                height={200}
                src="/aliflogo.png"
                alt="ALIF ATTARWALA"
              /> */}
              {/* <Image src={alif} alt="ALIF ATTARWALA" width={240} height={24} /> */}
            </div>
          </Link>
          {/* <div className="hidden xl:flex gap-4">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/" className="">
              Shop
            </Link>
            <Link href="/" className="">
              Deals
            </Link>
            <Link href="/" className="">
              About
            </Link>
            <Link href="/" className="">
              Contact
            </Link>
          </div> */}
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
