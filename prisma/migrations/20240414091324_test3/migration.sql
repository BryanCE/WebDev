/*
  Warnings:

  - You are about to drop the column `testcolumn` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `testcolumn2` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "testcolumn",
DROP COLUMN "testcolumn2";
