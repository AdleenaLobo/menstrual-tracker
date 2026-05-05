"use client";
import Day from "@/app/hooks/day";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { addDays, eachDayOfInterval, format, subDays } from "date-fns";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Prediction({ params }: { params: { userid: string } }) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const [_,setDaysCount] = useState<Number>(0);
  const [currentPhase] = useState("Phase");
  const [date, setDate] = useState();
  const [currentDate, setCurrentDate] = useState(["month"]);
  const [translateX, setTranslateX] = useState("");

  console.log(currentDate);

  useEffect(() => {
    const today = new Date();
    const dateStr = format(today, "MMMM,dd,yyyy");
    setCurrentDate(dateStr.split(","));

    const resize = () => {
      if (containerRef.current && dayRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const dayWidth = dayRef.current.offsetWidth;
        const count = Math.floor(containerWidth / dayWidth);
        const half = Math.floor((count - 4) / 2);
        setDaysCount(count - 4);

        const startDate = subDays(today, half);
        const endDate = addDays(today, count - 4 - half);
        setDate(eachDayOfInterval({ start: startDate, end: endDate })); //type error
        console.log(typeof date);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  console.log(date);
  return (
    <div className=" w-full h-full " ref={containerRef}>
      <div className="text-center text-3xl p-2">{currentPhase}</div>
      <div className="invisible absolute" ref={dayRef}>
        <Day />
      </div>
      <div className="w-full text-center text-2xl border-t-2 border-white">
        {currentDate[0]}
      </div>
      <Carousel className="w-full flex justify-center">
        <CarouselContent>
                   {date?.map((d, i) => (
            <CarouselItem key={i} className="basis-[8rem] pl-2">
              <Day
                date={d.toDateString()}
                translateX={translateX}
                setTranslateX={setTranslateX}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-2">
        <div className="bg-red-300/30 m-6 p-2 h-">
          <ul>Likely symptopms</ul>
          {currentPhase == "Phase" ? (
            <li>
              <button
                onClick={() => {
                  router.push(`../calender/${params.userid}`);
                }}
              >
                To get predictions add your current phase in the calender
              </button>
            </li>
          ) : (
            <></>
          )}
        </div>
        <div className="bg-red-300/30 m-6 p-2">
          <ul>Diet plan</ul>
          {currentPhase == "Phase" ? (
            <li>
              <button
                onClick={() => {
                  router.push(`../calender/${params.userid}`);
                }}
              >
                To get predictions add your current phase in the calender
              </button>
            </li>
          ) : (
            <></>
          )}
        </div>
        <div className="bg-red-300/30 m-6 p-2">
          <ul>Activity recommended</ul>
          {currentPhase == "Phase" ? (
            <li>
              <button
                onClick={() => {
                  router.push(`../calender/${params.userid}`);
                }}
              >
                To get predictions add your current phase in the calender
              </button>
            </li>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
