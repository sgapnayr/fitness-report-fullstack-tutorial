"use client";

import axios from "axios";
import { FitnessReport, TrainingPlan } from "@prisma/client";
import { useState, useEffect } from "react";
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
  const [fitnessReports, setFitnessReports] = useState<FitnessReport[]>([]);

  async function fetchFitnessReports() {
    const response = await axios.get("/api/fitness-reports");
    setFitnessReports(response.data);
  }

  useEffect(() => {
    fetchFitnessReports();
  }, []);

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
