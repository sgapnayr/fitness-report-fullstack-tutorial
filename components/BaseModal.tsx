import React from "react";
import { FitnessReport } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BaseAreYouSure from "./BaseAreYouSure";

function BaseModal({
  fitnessReport,
  children,
}: {
  fitnessReport: FitnessReport;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black font-bold text-4xl">
            {fitnessReport.fitnessReportName}
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col">
              <div>Client: {fitnessReport.fitnessReportClient}</div>
              <div>Trainer: {fitnessReport.fitnessReportTrainer}</div>
              <div>Date: {fitnessReport.fitnessReportDate}</div>
              <div>
                # of workouts: {fitnessReport.fitnessReportNumberOfWorkouts}
              </div>
            </div>
          </DialogDescription>
          <div className="w-full flex justify-end">
            <BaseAreYouSure fitnessReport={fitnessReport}>
              <button className="bg-red-600 text-white p-4 rounded-md active:scale-90 transition cursor-pointer">
                Delete Report
              </button>
            </BaseAreYouSure>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default BaseModal;
