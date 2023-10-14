-- CreateTable
CREATE TABLE `colunas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarefas` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `dataParaConclusao` DATETIME(3) NOT NULL,
    `nivelPrioridade` INTEGER NOT NULL,
    `idColuna` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tarefas` ADD CONSTRAINT `tarefas_idColuna_fkey` FOREIGN KEY (`idColuna`) REFERENCES `colunas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
