// "use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";

// const MagneticCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector(".cursor") as HTMLElement;
//     const links = document.querySelectorAll("[data-magnetic]");

//     // Update cursor position
//     const moveCursor = (e: MouseEvent) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.1,
//         ease: "power3.out",
//       });
//     };

//     // Handle magnetic effect
//     links.forEach((link) => {
//       link.addEventListener("mouseenter", () => {
//         gsap.to(cursor, {
//           scale: 2,
//           duration: 0.3,
//           opacity: 0.7,
//         });
//       });

//       link.addEventListener("mouseleave", () => {
//         gsap.to(cursor, {
//           scale: 1,
//           duration: 0.3,
//           opacity: 1,
//         });
//       });

//       link.addEventListener("mousemove", (e) => {
//         const rect = link.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         gsap.to(link, {
//           x: (x - rect.width / 2) * 0.2,
//           y: (y - rect.height / 2) * 0.2,
//         });
//       });

//       link.addEventListener("mouseleave", () => {
//         gsap.to(link, {
//           x: 0,
//           y: 0,
//         });
//       });
//     });

//     // Add event listener for mouse move
//     // document.addEventListener("mousemove", moveCursor);
//     document.addEventListener("mousemove", (e) => {
//       const cursor = document.querySelector(".cursor");
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });

//     // Cleanup event listener on unmount
//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return <div className="cursor"></div>;
// };

// export default MagneticCursor;
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const MagneticCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const links = document.querySelectorAll("[data-magnetic]");

    // Update cursor position
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    // Handle magnetic effect
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 2,
          duration: 0.3,
          opacity: 0.7,
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          opacity: 1,
        });
      });

      link.addEventListener("mousemove", (e) => {
        const mouseEvent = e as MouseEvent; // Type assertion for mouse event
        const rect = link.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        gsap.to(link, {
          x: (x - rect.width / 2) * 0.2,
          y: (y - rect.height / 2) * 0.2,
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          x: 0,
          y: 0,
        });
      });
    });

    // Add event listener for mouse move
    document.addEventListener("mousemove", (e) => {
      const mouseEvent = e as MouseEvent; // Type assertion for mouse event
      const cursor = document.querySelector(".cursor") as HTMLElement;
      cursor.style.transform = `translate(${mouseEvent.clientX}px, ${mouseEvent.clientY}px)`;
    });

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default MagneticCursor;
