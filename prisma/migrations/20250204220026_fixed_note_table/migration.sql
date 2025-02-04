/*
  Warnings:

  - Made the column `title` on table `note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `note` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `text` TEXT NOT NULL;
