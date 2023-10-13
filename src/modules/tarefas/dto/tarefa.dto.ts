export type TarefaDTO = {
    id?: string;
    titulo: string;
    descricao: string;
    dataParaConclusao: Date;
    nivelPrioridade: number;
    idColuna: string;
}