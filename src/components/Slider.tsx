// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState } from "react";

// // const slides = [
// //   {
// //     id: 1,
// //     title: "Summer Sale Collections",
// //     description: "Sale! Up to 50% off!",
// //     img: "https://images.pexels.com/photos/4659793/pexels-photo-4659793.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     url: "/",
// //     bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
// //   },
// //   {
// //     id: 2,
// //     title: "Winter Sale Collections",
// //     description: "Sale! Up to 50% off!",
// //     img: "https://images.pexels.com/photos/12563411/pexels-photo-12563411.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     url: "/",
// //     bg: "bg-gradient-to-r from-pink-50 to-blue-50",
// //   },
// //   {
// //     id: 3,
// //     title: "Spring Sale Collections",
// //     description: "Sale! Up to 50% off!",
// //     img: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     url: "/",
// //     bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
// //   },
// // ];
// // const Slider = () => {
// //   const [current, setCurrent] = useState(0);
// //   return (
// //     <div className="h-[calc(100vh-80px)] overflow-hidden">
// //       <div
// //         className="w-max h-full flex transition-all ease-in-out duration-1000"
// //         style={{ transform: `translateX(-${current * 100}vw)` }}
// //       >
// //         {slides.map((slide) => (
// //           <div
// //             className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
// //             key={slide.id}
// //           >
// //             {/* TEXT CONTAINER */}
// //             <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
// //               <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
// //                 {slide.description}
// //               </h2>
// //               <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
// //                 {slide.title}
// //               </h1>
// //               <Link href={slide.url}>
// //                 <button className="rounded-md bg-black text-white py-3 px-4 ">
// //                   SHOP NOW
// //                 </button>
// //               </Link>
// //             </div>
// //             {/* IMAGE CONTAINER */}
// //             <div className="h-1/2 xl:w-1/2 xl:h-full relative">
// //               <Image
// //                 src={slide.img}
// //                 alt=""
// //                 fill
// //                 sizes="100%"
// //                 className="object-cover"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
// //         {slides.map((slide, index) => (
// //           <div
// //             className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
// //               current === index ? "scale-150" : ""
// //             }`}
// //             key={slide.id}
// //             onClick={() => setCurrent(index)}
// //           >
// //             {current === index && (
// //               <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Slider;
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Summer Sale Collections",
//     description: "Sale! Up to 50% off!",
//     // img: "https://images.pexels.com/photos/4659793/pexels-photo-4659793.jpeg?auto=compress&cs=tinysrgb&w=600",
//     img: "/slider1.jpg",
//     url: "/",
//     bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
//   },
//   {
//     id: 2,
//     title: "Winter Sale Collections",
//     description: "Sale! Up to 50% off!",
//     img: "/slider2.jpg",
//     // img: "https://images.pexels.com/photos/12563411/pexels-photo-12563411.jpeg?auto=compress&cs=tinysrgb&w=600",
//     url: "/",
//     bg: "bg-gradient-to-r from-pink-50 to-blue-50",
//   },
//   {
//     id: 3,
//     title: "Spring Sale Collections",
//     description: "Sale! Up to 50% off!",
//     img: "/slider3.jpg",
//     // img: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600",
//     url: "/",
//     bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
//   },
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (current === slides.length - 1) {
//         // Temporarily disable animation to reset to first slide
//         setIsTransitioning(false);
//         setTimeout(() => {
//           setCurrent(0);
//           setIsTransitioning(true);
//         }, 10);
//       } else {
//         setCurrent((prev) => prev + 1);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [current]);

//   return (
//     <div className="relative h-[calc(100vh-80px)] overflow-hidden">
//       <div
//         className={`w-max h-full flex ${
//           isTransitioning
//             ? "transition-transform duration-1000 ease-in-out"
//             : ""
//         }`}
//         style={{ transform: `translateX(-${current * 100}vw)` }}
//       >
//         {slides.map((slide) => (
//           <div
//             className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
//             key={slide.id}
//           >
//             {/* TEXT CONTAINER */}
//             <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
//               <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
//                 {slide.description}
//               </h2>
//               <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
//                 {slide.title}
//               </h1>
//               <Link href={slide.url}>
//                 <button className="rounded-md bg-black text-white py-3 px-4 ">
//                   SHOP NOW
//                 </button>
//               </Link>
//             </div>
//             {/* IMAGE CONTAINER */}
//             <div className="h-1/2 xl:w-1/2 xl:h-full relative">
//               <Image
//                 src={slide.img}
//                 alt=""
//                 fill
//                 sizes="100%"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
//         {slides.map((slide, index) => (
//           <div
//             className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
//               current === index ? "scale-150" : ""
//             }`}
//             key={slide.id}
//             onClick={() => setCurrent(index)}
//           >
//             {current === index && (
//               <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider1.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider2.jpg",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    url: "/",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider3.jpg",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === slides.length - 1) {
        // Temporarily disable animation to reset to the first slide
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrent(0);
          setIsTransitioning(true);
        }, 10);
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (titleRef.current) {
      const titleText = slides[current].title;
      const chars = titleText.split("");

      // Clear previous content and reset title
      titleRef.current.innerHTML = "";
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        titleRef.current.appendChild(span);
      });

      // Animate each character
      gsap.fromTo(
        titleRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.05,
          ease: "power1.inOut",
        }
      );
    }
  }, [current]);

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <div
        className={`w-max h-full flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1
                ref={titleRef}
                className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold"
              >
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
