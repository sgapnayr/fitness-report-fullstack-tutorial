/*
  Warnings:

  - Added the required column `fitnessReportClient` to the `FitnessReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fitnessReportDate` to the `FitnessReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fitnessReportNumberOfWorkouts` to the `FitnessReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fitnessReportTrainer` to the `FitnessReport` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FitnessReport" (
    "fitnessReportId" TEXT NOT NULL PRIMARY KEY,
    "fitnessReportName" TEXT NOT NULL,
    "fitnessReportDate" TEXT NOT NULL,
    "fitnessReportTrainer" TEXT NOT NULL,
    "fitnessReportClient" TEXT NOT NULL,
    "fitnessReportNumberOfWorkouts" TEXT NOT NULL
);
INSERT INTO "new_FitnessReport" ("fitnessReportId", "fitnessReportName") SELECT "fitnessReportId", "fitnessReportName" FROM "FitnessReport";
DROP TABLE "FitnessReport";
ALTER TABLE "new_FitnessReport" RENAME TO "FitnessReport";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
