"use client";

import BaseInput from "@/components/BaseInput";
import BaseWrapper from "@/components/BaseWrapper";
import { FitnessReport } from "@prisma/client";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function InputForm() {
  // *************************** STATE & ERRORS *************************** //
  const [formData, setFormData] = useState(createDefaultFormData());
  const [errors, setErrors] = useState(createDefaultFormData());
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // *************************** VALIDATION *************************** //
  const fitnessReportSchema = z.object({
    fitnessReportName: z.string().min(1, "Report Name is required"),
    fitnessReportDate: z.string().min(1, "Report Date is required"),
    fitnessReportTrainer: z.string().min(1, "Trainer is required"),
    fitnessReportClient: z.string().min(1, "Client is required"),
    fitnessReportNumberOfWorkouts: z
      .string()
      .min(0, "Number of workouts is required"),
  });
  function createDefaultFormData(): z.infer<typeof fitnessReportSchema> {
    return {
      fitnessReportName: "",
      fitnessReportDate: "",
      fitnessReportTrainer: "",
      fitnessReportClient: "",
      fitnessReportNumberOfWorkouts: "",
    };
  }

  // *************************** FORM SUBMIT *************************** //
  const router = useRouter();
  const handleSubmit = async () => {
    const validationResult = fitnessReportSchema.safeParse(formData);

    if (!validationResult.success) {
      setErrors(validationResult.error.flatten().fieldErrors as never);
      return;
    }

    try {
      await axios.post("/api/fitness-reports", {
        fitnessReportName: formData.fitnessReportName,
        fitnessReportDate: formData.fitnessReportDate,
        fitnessReportTrainer: formData.fitnessReportTrainer,
        fitnessReportClient: formData.fitnessReportClient,
        fitnessReportNumberOfWorkouts: formData.fitnessReportNumberOfWorkouts,
      });

      toast.success("Report created successfully!", { duration: 2000 });
      router.push("/");

      setErrors(createDefaultFormData());
    } catch (error) {
      toast.error("Failed to create report. Please try again.", {
        duration: 2000,
      });
    }
  };

  // *************************** TEMPLATE *************************** //
  return (
    <BaseWrapper>
      <h1 className="my-8 w-full text-center font-bold text-3xl">Input Form</h1>
      <div className="flex flex-col px-8">
        <BaseInput
          type="text"
          name="fitnessReportName"
          value={formData.fitnessReportName}
          placeholder="Report Name"
          onChange={handleChange}
          error={errors.fitnessReportName}
          onKeyPress={handleKeyPress}
        />
        <BaseInput
          type="text"
          name="fitnessReportDate"
          value={formData.fitnessReportDate}
          placeholder="Report Date"
          onChange={handleChange}
          error={errors.fitnessReportDate}
          onKeyPress={handleKeyPress}
        />
        <BaseInput
          type="text"
          name="fitnessReportTrainer"
          value={formData.fitnessReportTrainer}
          placeholder="Trainer"
          onChange={handleChange}
          error={errors.fitnessReportTrainer}
          onKeyPress={handleKeyPress}
        />
        <BaseInput
          type="text"
          name="fitnessReportClient"
          value={formData.fitnessReportClient}
          placeholder="Client Name"
          onChange={handleChange}
          error={errors.fitnessReportClient}
          onKeyPress={handleKeyPress}
        />
        <BaseInput
          type="text"
          name="fitnessReportNumberOfWorkouts"
          value={formData.fitnessReportNumberOfWorkouts}
          placeholder="Number of Workouts"
          onChange={handleChange}
          error={errors.fitnessReportNumberOfWorkouts}
          onKeyPress={handleKeyPress}
        />

        <button onClick={handleSubmit}>Click to Create Report</button>
      </div>
    </BaseWrapper>
  );
}
