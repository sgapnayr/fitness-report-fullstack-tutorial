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
import axios from "axios";

function BaseAreYouSure({
  fitnessReport,
  children,
}: {
  fitnessReport: FitnessReport;
  children: React.ReactNode;
}) {
  function handleDeleteReport(fitnessReportId: string) {
    axios.delete(`/api/report/${fitnessReportId}`);
  }

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black font-bold text-4xl">
            Are you sure?
          </DialogTitle>
          <DialogDescription>
            Deleting report {fitnessReport.fitnessReportName} will delete all
          </DialogDescription>
          <div className="w-full flex justify-end">
            <button
              onClick={() => handleDeleteReport(fitnessReport.fitnessReportId)}
              className="bg-red-600 text-white p-4 rounded-md active:scale-90 transition cursor-pointer"
            >
              I am sure
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default BaseAreYouSure;
