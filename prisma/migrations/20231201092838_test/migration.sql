-- AlterTable
ALTER TABLE `Message` ADD COLUMN `deletedAt` DATETIME(3) NULL;

update `Message` set `deletedAt` = null;
