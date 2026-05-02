'use client';
import { ChevronsRight } from 'feather-icons-react';
import {motion} from "motion/react";

export default function NavIcon() {
    return (
        < motion.div className= "absolute bottom-20 -left-5 rounded-r-full p-2 pl-5 bg-red-500"
        animate={{
            x:[0,5, 0]
        }}
        transition={{
            repeat:1,
            duration:3,
            ease:"linear",
        }}>
            
            <ChevronsRight />
        </motion.div>
    );
}
