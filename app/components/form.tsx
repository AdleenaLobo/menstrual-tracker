import {useForm} from "react-hook-form";

export default function Form({children}){
    const {register , handleSubmit, formState:{errors}} = useForm();
    console.log(errors);
    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
        })}>
            <label name="generic"> Input value1: </label>
            <input {...register("generic", {required:"this is required"})} placeholder="enter some generic value" name="generic" type="text"></input>
            <button type="submit"> submit</button>
            {children}
        </form>
    );
}