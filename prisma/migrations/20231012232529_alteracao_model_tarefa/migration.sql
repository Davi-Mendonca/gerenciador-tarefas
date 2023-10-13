/*
  Warnings:

  - Changed the type of `nivelPrioridade` on the `tarefas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `tarefas` DROP COLUMN `nivelPrioridade`,
    ADD COLUMN `nivelPrioridade` INTEGER NOT NULL;
