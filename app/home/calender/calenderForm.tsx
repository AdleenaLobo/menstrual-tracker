"use client";
import Dialog from "@/app/components/dialog";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";


type  FormValues = {
  cyclestatus: string,   // just a string
  status: string,
  flow: string,
  comments: string,
  symptoms: string[],
}

export default function CalendarForm({
  dateStr,
  clicked,
  setClicked,
}: {
  dateStr: string;
  clicked: boolean;
  setClicked: (val: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
   defaultValues: {
  cyclestatus: "180ec6fc-6258-4278-83a2-3ca4da1b3d6f",   // just a string
  status: "start",
  flow: "light",
  comments: "Some comments about how you feel... ",
  symptoms: [],               // array of strings
},
  });


  console.log(errors);
  console.log(dateStr);

  const opetionCycleStatus = [
    { value: "180ec6fc-6258-4278-83a2-3ca4da1b3d6f", label: "Menstrual Phase" },
    { value: "3310e93d-e68d-4495-acfc-038d7b0829bd", label: "Luteal Phase" },
    { value: "4a0ee2dc-b153-42ee-929c-710559e27066", label: "Ovulation Phase" },
    { value: "f5e21712-dc65-4fbd-acf4-0bb133197f5e", label: "Follicular Phase" },
  ];

  const optionsSymptoms = [
    { value: "bloating", label: "Bloating" },
    { value: "cramps", label: "Cramps" },
    { value: "headache", label: "Headache" },
    { value: "breast-tenderness", label: "Breast tenderness" },
    { value: "fatigue", label: "Fatigue" },
    { value: "mood-swings", label: "Mood Swings" },
    { value: "back-pain", label: "Back Pain" },
    { value: "nausea", label: "Nausea" },
    { value: "acne", label: "Acne" },
    { value: "food-cravings", label: "Food-cravings" },
    { value: "dizziness", label: "Dizziness" },
    { value: "diarrhea", label: "Diarrhea" },
    { value: "spotting", label: "Spotting" },
  ];

  return (
    <Dialog
      open={clicked}
      onClose={setClicked}
      heading={"Cycle status form"}
      className="bg-pinkish border-2 border-pinkish w-md h-96 inset-shadow-md shadow-red-500 "
      isDismiss={true}
    >
      <form
        onSubmit={handleSubmit(async (data) => {
  const formatted = {
    ...data,
    cyclestatus: data.cyclestatus,      // already a string
    symptoms: data.symptoms.join(", "), // already an array of strings
  };

  const res = await fetch("/api/cycledata", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formatted),
  });

  const json = await res.json();
  console.log("Response:", json);

  setClicked(false);
})}


        className="overflow-y-auto h-[calc(100%-35px)] "
      >
        <fieldset className="m-2">
          <label htmlFor="cyclestatus" className="block">
            What phase in your cycle are you on?
          </label>
          <Controller
  name="cyclestatus"
  control={control}
  render={({ field }) => (
    <Select
      options={opetionCycleStatus}
      value={opetionCycleStatus.find((opt) => opt.value === field.value)}
      onChange={(val) => field.onChange(val?.value)} // store only the string
      className="show-outline rounded-md"
      placeholder="Enter your current phase..."
      getOptionLabel={(opt) => opt.label}
      getOptionValue={(opt) => opt.value}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "#fca5a5",
          borderRadius: "0.5rem",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor:
            state.isSelected || state.isFocused ? "#ef4444" : "#fca5a5",
        }),
      }}
    />
  )}
/>

        </fieldset>

        <fieldset className="m-2">
          <label htmlFor="status" className="block">
            What is your periods status?
          </label>
          <div className="flex flex-wrap gap-4 justify-between bg-red-300 p-1 rounded-md">
            <div className="">
              <input
                type="radio"
                value="start"
                {...register("status", { required: "This is a required" })}
                id="start"
                className="accent-red-500 show-outline border border-red-500 rounded"
              />
              <label htmlFor="start">Started today</label>
            </div>
            <div>
              <input
                type="radio"
                value="process"
                {...register("status", { required: "This is a required" })}
                name="status"
                id="process"
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="process">Going on</label>
            </div>
            <div>
              <input
                type="radio"
                value="end"
                {...register("status", { required: "This is a required" })}
                name="status"
                id="end"
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="end">Ended today</label>
            </div>
            <div>
              <input
                type="radio"
                value="no"
                {...register("status", { required: "This is a required" })}
                name="status"
                id="no"
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="no">Not started yet</label>
            </div>
          </div>
        </fieldset>

        <fieldset className="m-2">
          <label htmlFor="flow" className="block">
            How is your flow?
          </label>
          <div className="bg-red-300 p-1 rounded-md">
            <div>
              <input
                type="radio"
                value="light"
                {...register("flow", { required: "This is a required" })}
                id="light"
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="light">Light flow</label>
            </div>
            <div>
              <input
                type="radio"
                value="heavy"
                id="heavy"
                {...register("flow", { required: "This is a required" })}
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="heavy">Heavy flow</label>
            </div>
            <div>
              <input
                type="radio"
                value="no-flow"
                id="no-flow"
                {...register("flow", { required: "This is a required" })}
                className="accent-red-500 show-outline rounded-md"
              />
              <label htmlFor="no-flow">No flow</label>
            </div>
          </div>
        </fieldset>

        <fieldset className="m-2">
          <label htmlFor="symptoms">Symptoms</label>
          <Controller
  name="symptoms"
  control={control}
  render={({ field }) => (
    <Select
      options={optionsSymptoms}
      value={optionsSymptoms.filter((opt) => field.value.includes(opt.value))}
      onChange={(val) => field.onChange(val.map((v) => v.value))} // store array of strings
      isMulti
      className="show-outline rounded-md"
      placeholder="Select multiple symptoms"
      getOptionLabel={(opt) => opt.label}
      getOptionValue={(opt) => opt.value}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "#fca5a5",
          borderRadius: "0.5rem",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor:
            state.isSelected || state.isFocused ? "#ef4444" : "#fca5a5",
        }),
      }}
    />
  )}
/>

        </fieldset>
        <fieldset className="p-2">
          <label htmlFor="comments">Comments: </label>
          <textarea
            id="comments"
            {...register("comments")}
            className="w-full h-10 overflow-y-auto bg-red-300 border border-red-300 rounded-md show-outline"
          ></textarea>
        </fieldset>
        <div className="w-full flex justify-center mt-3 ">
          <button type="submit" className="bg-red-300 w-1/2 p-2 rounded-md show-outline">
            Submit
          </button>
        </div>
      </form>
    </Dialog>
  );
}
