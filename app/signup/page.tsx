'use client';
import { useState} from "react";
import * as Ariakit from "@ariakit/react";
import Dialog from "../components/dialog";
import { useRouter } from "next/navigation";
import { CreateUser } from "../actions/createUser";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export default function Signup() {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();
  

  const form = Ariakit.useFormStore<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });


  form.useSubmit(async (state) => {
    const userDetails:FormValues= state.values;
    console.log(userDetails);
  try{
    await CreateUser({username: userDetails.username , email:userDetails.email , password:userDetails.password });
    router.push("/login");
  }catch(error){
    console.log("error", error);
  }

  });

  form.useValidate(()=>{
    const val_pass = form.getValue("password");
    const val_confirm = form.getValue("confirmpassword");
    if(val_pass != val_confirm){form.setError("confirmpassword" , "Password and confirm password are not matching");}
  })

  return (
    <Dialog open={open} close={!open} onClose={setOpen} heading="SignUp to CycleTracker">
      <Ariakit.Form
        store={form}
        aria-labelledby="signup-form"
        className="bg-pinkish border-2 border-red-400 p-6 mt-6 rounded-md"
      >
        <div className="">
          <Ariakit.FormLabel name="username" className="mr-2">UserName:</Ariakit.FormLabel>
          <Ariakit.FormInput name="username" placeholder="adc_name" className="bg-red-400 rounded-md" required/>
          <Ariakit.FormError name="username" className="min-h-[1.4rem] text-red-600 text-sm " />
        </div>

        <div className="">
          <Ariakit.FormLabel name="email" className="mr-2">Email:</Ariakit.FormLabel>
          <Ariakit.FormInput name="email" type="email" placeholder="adc@gmail.com" className="bg-red-400 rounded-md" required />
          <Ariakit.FormError name="email" className=" min-h-[1.4rem] text-red-600 text-sm" />
        </div>

        <div className="">
          <Ariakit.FormLabel name="password" className="mr-2">Password:</Ariakit.FormLabel>
          <Ariakit.FormInput name="password" type="password" placeholder="abc" className="bg-red-400 rounded-md" required/>
          <Ariakit.FormError name="password" className="min-h-[1.4rem] text-red-600 text-sm" />
        </div>

        <div className="">
          <Ariakit.FormLabel name="confirmpassword" className="mr-2">Confirm Password:</Ariakit.FormLabel>
          <Ariakit.FormInput name="confirmpassword" type="password" placeholder="abc" className="bg-red-400 rounded-md" required />
          <Ariakit.FormError name="confirmpassword" className="min-h-[1.4rem] text-red-600 text-sm" />
        </div>

        <Ariakit.FormSubmit className="bg-red-400 w-full rounded-lg">Sign up</Ariakit.FormSubmit>
      </Ariakit.Form>
    </Dialog>
  );
}
