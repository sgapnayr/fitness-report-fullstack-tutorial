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
      return await getReport(req, res);
    case "DELETE":
      return await deleteReport(req, res);
    default:
      res.status(405).end();
      break;
  }
}

async function getReport(req: NextApiRequest, res: NextApiResponse) {
  const { fitnessReportId } = req.query;

  const report = await prisma.fitnessReport.findUnique({
    where: {
      fitnessReportId: String(fitnessReportId as string),
    },
  });

  res.json(report);
}

async function deleteReport(req: NextApiRequest, res: NextApiResponse) {
  const { fitnessReportId } = req.query;

  const report = await prisma.fitnessReport.delete({
    where: {
      fitnessReportId: String(fitnessReportId as string),
    },
  });

  res.json(report);
}
