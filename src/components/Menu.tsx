// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import NavbarIcons from "./NavbarIcons";

// const Menu = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       {/* <div className="flex gap-5"> */}
//       {/* <NavbarIcons /> */}
//       {open && (
//         <div className="absolute bg-black text-white left-0 right-20 top-20 w-full h-[calc(100vh-26px)] flex flex-col items-center justify-center gap-8 trxt-xl z-10">
//           <Link href="/">Home</Link>
//           <Link href="/">About</Link>
//           <Link href="/">Contact</Link>
//           <Link href="/">Logout</Link>
//           <Link href="/">Cart(1)</Link>
//         </div>
//       )}
//       <Image
//         src="/menu.png"
//         alt=""
//         width={28}
//         height={28}
//         className="cursor-pointer"
//         onClick={() => setOpen((prev) => !prev)}
//       />
//     </div>
//   );
// };

// export default Menu;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`absolute bg-black text-white left-0 top-20 w-[80%] h-[calc(100vh-26px)] flex flex-col items-start p-8 gap-4 text-xl z-10 transition-transform duration-300 ease-in-out transform ${
          open ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
        }`}
        style={{ borderRight: "2px solid #fff" }}
      >
        <Link
          href="/"
          className="w-full border-b border-gray-600 pb-2"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="w-full border-b border-gray-600 pb-2"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-full border-b border-gray-600 pb-2"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  );
};

export default Menu;
