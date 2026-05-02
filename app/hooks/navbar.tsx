"use client";
import Link from "next/link";
import user from "../components/userdata";
import { Sun, Moon, ArrowLeft, X, EyeOff } from "feather-icons-react";
import { useState } from "react";
import * as Ariakit from "@ariakit/react";
import DeleteUser from "../actions/deleteUser";
import {useRouter } from "next/navigation";
import {motion} from "motion/react";

export default function Navbar({clicked , setClicked}:{
  clicked: boolean,
  setClicked: (value:boolean)=>void
}) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const userId = user((state) => state.userid);
  const userEmail = user((state) => state.useremail);
  const popovercard = Ariakit.usePopoverStore({placement:"right-end"});

  //change theme
  //profile with delete account option
  async function deleteAccount(){
    try{
      await DeleteUser({userid:userId});
      router.push("/login");
    }catch(error){
      console.error(error);
    }
  }

  return (
    <motion.div className=" z-30 flex flex-col bg-red-500 w-48 p-2 pt-4 pb-4 gap-4"
  initial={{ x: -100}}
  animate={{ x: 0}}
     transition={{
      duration:1,
            ease:"linear",
        }}>
      <div className="p-2">
          <Ariakit.PopoverDisclosure store={popovercard} className="underline cursor-pointer">
            {userEmail}temp
          </Ariakit.PopoverDisclosure>
          <Ariakit.Popover store={popovercard} >
                <div className="bg-red-500 rounded-2xl p-4 shadow-lg">
              <button className="  flex  gap-2 bg-red-400 rounded-2xl p-2  hover:shadow-lg focus:bg-white/50 hover:bg-white/50" onClick={deleteAccount}>
              <X/><div>Delete Account</div></button>
              </div>
          </Ariakit.Popover>
      </div>
      <div className="flex flex-col ">
        <Link
          href={`/home/dashboard/${userId}`}
          className="p-2 mb-2 rounded-full bg-red-400 text-center hover:shadow-lg focus:bg-white/50 hover:bg-white/50"
        >
          Dashboard
        </Link>
        <Link
          href={`/home/prediction/${userId}`}
          className="p-2 mb-2 rounded-full  bg-red-400 text-center hover:shadow-lg hover:bg-white/50 focus:bg-white/50"
        >
          Predictions
        </Link>
        <Link
          href={`/home/calender/${userId}`}
          className="p-2 mb-2 rounded-full  bg-red-400 text-center hover:shadow-lg hover:bg-white/50 focus:bg-white/50"
        >
          Calender
        </Link>
      </div>
      <div className="mt-auto">
        <div className="flex gap-2 p-4" onClick={()=>{setClicked(!clicked)}}>
        <EyeOff  className=""/>
          Hide Navbar
        </div>
        <div className="flex gap-4 p-4">
          <Sun />
          <button
            className="bg-red-400 p-1 w-15 h-7 rounded-full"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <motion.div
              className="w-6  h-full bg-pinkish rounded-full"
              initial={{ x: 0 }}
              transition={{
                ease: "linear",
              }}
              animate={{
                x: toggle ? 25 : 0,
              }}
            ></motion.div>
          </button>
          <Moon />
        </div>

        <Link
          href={`/login`}
          className="flex bg-red-400 rounded-full p-2 justify-center gap-2 hover:shadow-lg focus:bg-white/50 hover:bg-white/50"
        >
          <ArrowLeft /> Signout
        </Link>
      </div>
    </motion.div>
  );
}
