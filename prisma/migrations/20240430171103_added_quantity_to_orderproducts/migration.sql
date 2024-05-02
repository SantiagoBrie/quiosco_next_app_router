/*
  Warnings:

  - Added the required column `quenatity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quenatity" INTEGER NOT NULL;
