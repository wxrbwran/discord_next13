/*
  Warnings:

  - Added the required column `deletedAt` to the `DirectMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DirectMessage` ADD COLUMN `deletedAt` DATETIME(3) NOT NULL;
