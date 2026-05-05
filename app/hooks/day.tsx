'use client';
import { motion } from "motion/react";


export default function Day({
  width = "w-24",
  height = "h-32",
  date = "null",
}: {
  width?: string;
  height?: string;
  date?: string;
}) {
  const day = date?.split(" ")[2];
  const style = `rounded-full bg-white border-2 border-[#fc6c85] ml-2 ${width} ${height}`;

  // const startX = useRef<number | null>(null);
  // const dragging = useRef<boolean>(false);
  // const lastOffSetX = useRef<number>(0);

  // // Optional: handle mouse up outside the element
  // useEffect(() => {
  //   const handleMouseUp = () => {
  //     if (dragging.current) {
  //       dragging.current = false;
  //       startX.current = null;
  //       console.log("Mouse released outside element");

  //       lastOffSetX.current = parseInt(translateX||"0");
  //     }
  //   };
  //   window.addEventListener("mouseup", handleMouseUp);
  //   return () => window.removeEventListener("mouseup", handleMouseUp);
  // }, [translateX]);

  // function mouseDown(e: React.MouseEvent) {
  //   dragging.current = true;
  //   startX.current = e.clientX;
  //   console.log("Mouse down at:", startX.current);
  // }

  // function mouseMove(e: React.MouseEvent) {
  //   if (dragging.current && startX.current !== null) {
  //     const delta = e.clientX - startX.current;
  //     const total = lastOffSetX.current+ delta;
  //     setTranslateX(`${total}px`);
  //     console.log("Dragging, deltaX:", delta);
  //   }
  // }

  return (
    <motion.div
      className="flex flex-col"
    >
      <div className="text-center text-xl">{day}</div>
      <div className={style}>
        <div
          className="h-1/2 rounded-full m-2"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffcbc4,
              #ffcbc4 10px,
              #fc6c85 10px,
              #fc6c85 15px
            )`,
          }}
        ></div>
      </div>
    </motion.div>
  );
}


// 'use client';
// import { motion } from "motion/react";
// import React, { useRef, useState, useEffect } from "react";

// export default function Day() {
//   const [translateX, setTranslateX] = useState("0px");
//   const startX = useRef<number | null>(null);
//   const dragging = useRef<boolean>(false);

//   useEffect(() => {
//     const handleMouseUp = () => {
//       dragging.current = false;
//       startX.current = null;
//       console.log("Mouse released (global)");
//     };

//     window.addEventListener("mouseup", handleMouseUp);
//     return () => window.removeEventListener("mouseup", handleMouseUp);
//   }, []);

//   const mouseDown = (e: React.MouseEvent) => {
//     dragging.current = true;
//     startX.current = e.clientX;
//     console.log("Mouse down:", e.clientX);
//   };

//   const mouseMove = (e: React.MouseEvent) => {
//     if (dragging.current && startX.current !== null) {
//       const delta = e.clientX - startX.current;
//       setTranslateX(`${delta}px`);
//       console.log("Dragging:", delta);
//     }
//   };

//   return (
//     <motion.div
//       className="w-24 h-24 bg-pink-400 rounded-lg text-center flex items-center justify-center cursor-pointer"
//       onMouseDown={mouseDown}
//       onMouseMove={mouseMove}
//       animate={{ x: translateX }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       Drag me
//     </motion.div>
//   );
// }
