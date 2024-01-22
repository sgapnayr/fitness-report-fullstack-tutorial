"use client";

import BaseInput from "@/components/BaseInput";
import BaseWrapper from "@/components/BaseWrapper";
import { FitnessReport } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import { z } from "zod";

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
  });
  function createDefaultFormData(): z.infer<typeof fitnessReportSchema> {
    return {
      fitnessReportName: "",
      fitnessReportDate: "",
      fitnessReportTrainer: "",
    };
  }

  // *************************** FORM SUBMIT *************************** //
  const handleSubmit = async () => {
    const validationResult = fitnessReportSchema.safeParse(formData);

    if (!validationResult.success) {
      setErrors(validationResult.error.flatten().fieldErrors as never);
      return;
    }

    setErrors(createDefaultFormData());
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

        <button onClick={handleSubmit}>Click to Create Report</button>
      </div>
    </BaseWrapper>
  );
}
