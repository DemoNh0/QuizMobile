export interface IQuiz {
  numeroQuestao: string;
  questao: string;
  respostas: string[];
  respostaCerta: string;
}

export interface IUser {
  nome: string;
  pontuacao: number;
}
