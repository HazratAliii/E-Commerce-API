/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `User_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "User_info" ADD COLUMN     "name" TEXT NOT NULL;
