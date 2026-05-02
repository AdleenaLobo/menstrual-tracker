'use client';
import {Calendar} from "@fullcalendar/core";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin  from "@fullcalendar/interaction";
import { useEffect, useRef , useState} from "react";
import CalendarForm from "../calenderForm";


export default function Calender(){
    const calendarEl = useRef(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [clicked , setClicked] = useState<boolean>(false);

    useEffect(()=>{
        if(calendarEl.current == null){return;}
        

    const calendar = new Calendar(calendarEl.current, {
        plugins:[multiMonthPlugin, interactionPlugin],
        initialView: 'multiMonthYear',
        multiMonthMaxColumns:1,
        dateClick: function(info){
            alert(info.dateStr);
            console.log(info);
            setClicked(true);
            setSelectedDate(info.dateStr);
            info.dayEl.style.backgroundColor = "red";
        }

    });
    calendar.render();
        
    }, []);
    return(<>
    <div ref={calendarEl}>hello in calender
    {selectedDate?<CalendarForm dateStr ={selectedDate}clicked={clicked} setClicked = {setClicked}/>:undefined}
    </div>
    </>);
}