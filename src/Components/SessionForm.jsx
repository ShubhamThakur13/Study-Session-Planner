import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { MyContext } from "../Context/SessionContext";
import { nanoid } from "nanoid";

const SessionForm = () => {
  let { setStudydata, setToggle } = useContext(MyContext);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  let handleformsubmit = (data) => {
    setStudydata((prev) => [...prev, { ...data, id: nanoid()}]);
    reset();

    setToggle(false);
  };

  console.log(isValid);

  return (
    <div>
      <Navbar />

      <div className="main flex h-screen">
        <div className="left w-[50%]">
          <div className="top">
            <h1>F</h1>
          </div>
        </div>

        <div className="right w-[50%] p-6 flex justify-center items-center">
          <form
            className="bg-[#FFBB43] rounded-xl p-6 flex flex-col gap-3 w-[500px]"
            onSubmit={handleSubmit(handleformsubmit)}
          >
            <div className="topic-name flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#3B444C]">
                Topic Name
              </p>
              <input
                className="bg-[#FFD38A] p-3 w-[95%] rounded-xl text-[15px]"
                {...register("TopicName", {
                  required: "Topic name is required",
                })}
                type="text"
                placeholder="Topic Name"
              />
              {errors.TopicName && (
                <p className="text-red-700">{errors.TopicName.message}</p>
              )}
            </div>

            <div className="topic-name flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#3B444C]">
                Subject
              </p>
              <input
                className="bg-[#FFD38A] p-3 w-[95%] rounded-xl text-[15px]"
                {...register("subject", { required: "Subject is required.." })}
                type="text"
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-700">{errors.subject.message}</p>
              )}
            </div>

            <div className="topic-name flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#3B444C]">
                Duration
              </p>
              <input
                className="bg-[#FFD38A] p-3 w-[95%] rounded-xl text-[15px]"
                {...register("Duration", {
                  required: "Durations are required",
                  min: {
                    value: 10,
                    message: "Minimum duration more than 10 minutes",
                  },
                })}
                type="number"
                placeholder="Duration in Minutes"
              />
              {errors.Duration && (
                <p className="text-red-700">{errors.Duration.message}</p>
              )}
            </div>

            <div className="topic-name flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#3B444C]">
                Priorite
              </p>
              <input
                className="bg-[#FFD38A] p-3 w-[95%] rounded-xl text-[15px]"
                {...register("Priorite", { required: "Priorite is required" })}
                type="text"
                placeholder="Priorite in low medium and high"
              />
              {errors.Priorite && (
                <p className="text-red-700">{errors.Priorite.message}</p>
              )}
            </div>

            <div className="topic-name flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#3B444C]">Date</p>
              <input
                className="bg-[#FFD38A] p-3 w-[95%] rounded-xl text-[15px]"
                {...register("date", { required: "Date is required.." })}
                type="date"
                placeholder="Date"
              />
              {errors.date && (
                <p className="text-red-700">{errors.date.message}</p>
              )}
            </div>

            <div>
              <button
                disabled={!isValid}
                className={`p-3 ${isValid ? "bg-white" : " bg-[grey] none"}  w-[30%] rounded-4xl cursor-pointer`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
