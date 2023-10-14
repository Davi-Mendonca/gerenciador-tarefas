/*
  Warnings:

  - Added the required column `idQuadro` to the `colunas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `colunas` ADD COLUMN `idQuadro` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `quadros` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `idUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `colunas` ADD CONSTRAINT `colunas_idQuadro_fkey` FOREIGN KEY (`idQuadro`) REFERENCES `quadros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
