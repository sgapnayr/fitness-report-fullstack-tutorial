import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FitnessReport, TrainingPlan } from "@prisma/client";

function BaseTable() {
  const fitnessReports = [
    {
      fitnessReportId: "FR-001",
      fitnessReportName: "Fitness Report 1",
      fitnessReportDate: "2021-09-01",
      fitnessReportTrainer: "Sarah Summer",
      fitnessReportClient: "Brad Smith",
      trainingPlans: [
        {
          trainingPlanId: 1,
          trainingPlanWorkout: "Pushups",
          trainingPlanSets: 3,
          trainingPlanReps: 10,
          trainingPlanWeight: 0,
          fitnessReportId: "FR-001",
        },
      ],
    } as FitnessReport,
  ] as FitnessReport[];

  return (
    <div className="w-full">
      <Table>
        <TableCaption>A list of your recent fitness reports.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Report</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Trainer</TableHead>
            <TableHead className="text-right"># of Workouts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fitnessReports.map(
            (fitnessReport: any & { trainingPlans: TrainingPlan }) => {
              return (
                <TableRow key={fitnessReport.fitnessReportId}>
                  <TableCell className="font-medium">
                    {fitnessReport.fitnessReportDate}
                  </TableCell>
                  <TableCell className="font-bold">
                    {fitnessReport.fitnessReportName}
                  </TableCell>
                  <TableCell>{fitnessReport.fitnessReportClient}</TableCell>
                  <TableCell>{fitnessReport.fitnessReportTrainer}</TableCell>
                  <TableCell className="text-right">
                    {fitnessReport.trainingPlans?.length}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default BaseTable;
