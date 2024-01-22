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

function BaseTable() {
  const fitnessReports = [
    {
      fitnessReportId: "FR-001",
      fitnessReportName: "Fitness Report 1",
      fitnessReportDate: "2021-09-01",
      fitnessReportTrainer: "Sarah Summers",
      fitnessReportClient: "Brad Smith",
      fitnessReportTrainingPlan: [
        { workout: "Pushups", sets: 3, reps: 10, weight: 0 },
        { workout: "Pullups", sets: 3, reps: 10, weight: 0 },
        { workout: "Squats", sets: 3, reps: 10, weight: 135 },
        { workout: "Bench Press", sets: 3, reps: 10, weight: 135 },
      ],
    },
    {
      fitnessReportId: "FR-002",
      fitnessReportName: "Fitness Report 2",
      fitnessReportDate: "2021-09-02",
      fitnessReportTrainer: "Sarah Summers",
      fitnessReportClient: "Tyler Jones",
      fitnessReportTrainingPlan: [
        { workout: "Pushups", sets: 3, reps: 10, weight: 0 },
        { workout: "Pullups", sets: 3, reps: 10, weight: 0 },
        { workout: "Squats", sets: 3, reps: 10, weight: 135 },
        { workout: "Bench Press", sets: 3, reps: 10, weight: 135 },
        { workout: "Deadlifts", sets: 3, reps: 10, weight: 135 },
      ],
    },
  ];

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
          {fitnessReports.map((fitnessReport, idx) => {
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
                  {fitnessReport.fitnessReportTrainingPlan.length}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default BaseTable;
