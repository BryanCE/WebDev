/*
  Warnings:

  - Added the required column `testcolumn` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "testcolumn" VARCHAR(255) NOT NULL;
