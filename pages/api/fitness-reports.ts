import { NextApiRequest, NextApiResponse } from "next";
import { FitnessReport, PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getReports(req, res);
    case "POST":
      return await postReport(req, res);
    default:
      res.status(405).end();
      break;
  }
}

async function getReports(req: NextApiRequest, res: NextApiResponse) {
  const reports = await prisma.fitnessReport.findMany({});
  res.json(reports);
}

async function postReport(req: NextApiRequest, res: NextApiResponse) {
  const {
    fitnessReportName,
    fitnessReportDate,
    fitnessReportTrainer,
    fitnessReportClient,
    fitnessReportNumberOfWorkouts,
  } = req.body;

  const fitnessReportId = `FR-${randomUUID()}`;

  const report = await prisma.fitnessReport.create({
    data: {
      fitnessReportId: String(fitnessReportId),
      fitnessReportName,
      fitnessReportDate,
      fitnessReportTrainer,
      fitnessReportClient,
      fitnessReportNumberOfWorkouts,
    } as FitnessReport,
  });

  res.json(report);
}
