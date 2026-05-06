"use client";

import * as Ariakit from "@ariakit/react";
import Dialog from "../components/dialog";
import { useState } from "react";
import Link from "next/link";
import { FindUserByEmail } from "../actions/findUserByEmail";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import user from "../components/userdata";

export default function LoginPage() {

  type LoginFormValues = {
    email:string ;
    password: string;
  }

  const router = useRouter();
  const [, setOpen] = useState<boolean>(true);
  const form= Ariakit.useFormStore<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  form.useSubmit(async (state) => {
    const userDetails:LoginFormValues= state.values;
    try {
      const userData = await FindUserByEmail({ email: userDetails.email });
      if (userData.length == 0) {
        form.setError("email", "User not found");
      }
      console.log(userData);
      const match: boolean = await bcrypt.compare(
        userDetails.password,
        userData[0].password
      );
      if (!match) {
        form.setError("password", "Incorrect password");
        throw new Error("Incorrect password");
      }

      user.getState().setUserEmail(userData[0].email);
      user.getState().setUserId(userData[0].id);
      router.push(`/home/dashboard/${userData[0].id}`);
      //store in zustand maybe
      //take to that particular users page (redirect);
    } catch (error) {
      console.error(error);
      //error page
    }
  });

  return (
    <>
      <Dialog
        open={true}
        onClose={setOpen}
        heading={"Login to CycleTracker"}
      >
        <Ariakit.Form
          store={form}
          aria-labelledby="login-form"
          className=" bg-pinkish border-2 border-red-400 p-6 mt-6 rounded-md"
        >
          <div className="">
            <Ariakit.FormLabel name={form.names.email} className="mr-2">
              Email:
            </Ariakit.FormLabel>
            <Ariakit.FormInput
              type="email"
              name={form.names.email}
              placeholder=" adc@gmail.com"
              className="bg-red-400 rounded-md"
            ></Ariakit.FormInput>
            <Ariakit.FormError
              name="email"
              className="min-h-[1.4rem] text-red-600 text-sm "
            />
          </div>
          <div className="">
            <Ariakit.FormLabel name={form.names.password} className="mr-2">
              Password:
            </Ariakit.FormLabel>
            <Ariakit.FormInput
              type="password"
              name={form.names.password}
              placeholder=" abc"
              className="bg-red-400 rounded-md"
            ></Ariakit.FormInput>
            <Ariakit.FormError
              name="password"
              className="min-h-[1.4rem] text-red-600 text-sm "
            />
          </div>
          <Ariakit.FormSubmit className="bg-red-400 w-full rounded-lg">
            Login
          </Ariakit.FormSubmit>
        </Ariakit.Form>
        <div className="m-2">
          No account? Create New Account:{" "}
          <Link href="/signup" className="text-blue-500 underline">
            Sign up
          </Link>{" "}
        </div>
      </Dialog>
    </>
  );
}
