/*
  Warnings:

  - Added the required column `testcolumn2` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "testcolumn2" VARCHAR(255) NOT NULL;
