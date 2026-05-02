
import { ReactNode } from "react";
import CircularSquare from "../hooks/wave";
import NavbarOrIcon from "../hooks/navbaroricon";

export default function HomeLayout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-row box-border min-h-screen bg-pinkish overflow-x-hidden z-0">
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 -left-20"}  staggerValue={0}/>
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 left-40"}  staggerValue={4}/>
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 left-100"}  staggerValue={0}/>
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 left-160"}  staggerValue={4}/>
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 left-220"}  staggerValue={0}/>
        <CircularSquare color={"bg-red-400"} placement={"bottom-10 left-280"}  staggerValue={4}/>
        
        <CircularSquare color={"bg-red-300"} placement={"bottom-0 left-0"}  staggerValue={4}/>
        <CircularSquare color={"bg-red-300"} placement={"bottom-0 left-60"}  staggerValue={0}/>
        <CircularSquare color={"bg-red-300"} placement={"bottom-0 left-120"}  staggerValue={4}/>
        <CircularSquare color={"bg-red-300"} placement={"bottom-0 left-200"}  staggerValue={0}/>
        <CircularSquare color={"bg-red-300"} placement={"bottom-0 left-260"}  staggerValue={4}/>
        
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 -left-20"}  staggerValue={0}/>
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 left-40"}  staggerValue={4}/>
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 left-100"}  staggerValue={0}/>
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 left-160"}  staggerValue={4}/>
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 left-220"}  staggerValue={0}/>
        <CircularSquare color={"bg-rose-200"} placement={"-bottom-20 left-280"}  staggerValue={4}/>
        <NavbarOrIcon/>
      <div className="z-10 w-full">{children}</div>
    </div>
  );
}
