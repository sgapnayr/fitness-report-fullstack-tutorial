import { NextApiRequest, NextApiResponse } from "next";
import { FitnessReport, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getReports(req, res);
    default:
      res.status(405).end();
      break;
  }
}

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

async function getReports(req: NextApiRequest, res: NextApiResponse) {
  // const reports = await prisma.fitnessReport.findMany({});
  res.json(fitnessReports);
}
