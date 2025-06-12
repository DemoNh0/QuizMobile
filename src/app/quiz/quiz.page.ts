import { IQuiz, IUser } from './../model/IQuiz';
import { NavigationExtras, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tab1Page, user } from '../tab1/tab1.page';

import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {

  pontuacaoJogador = 0;
  respostaSelecionada = '';
  quiz: IQuiz;
  questao = 0;


  jogador: IUser[] =[
    {
      nome: user[0],
      pontuacao: this.pontuacaoJogador
    }

  ]
  listaQuiz: IQuiz[] = [
    {
      numeroQuestao: "1",
      questao: "Qual personagem principal de 'Super Mario' é conhecido por sua cor vermelha?",
      respostas: ["Luigi", "Yoshi", "Mario", "Bowser", "Wario" ],
      respostaCerta: "Mario"
    },
    {
      numeroQuestao: "2",
      questao: "Em que ano foi lançado o primeiro 'Pokémon' para Game Boy?",
      respostas: ["1998", "2000", "1996", "1995", "1997" ],
      respostaCerta: "1996"
    },
    {
      numeroQuestao: "3",
      questao: "Qual é o nome do console portátil da Nintendo que foi lançado em 2004 e ficou famoso pelo 'Pokémon FireRed/LeafGreen'?",
      respostas: ["Nintendo 3DS", "Nintendo DS", "PlayStation Portable", "Game Boy Advance SP", "Xbox Portable"],
      respostaCerta: "Game Boy Advance SP"
    },
    {
      numeroQuestao: "4",
      questao: "Qual é o nome do inimigo principal do Sonic nos jogos?",
      respostas: ["Dr. N. Gin", "Metal Sonic", "Shadow", "Knuckles", "Dr. Robotnik"],
      respostaCerta: "Dr. Robotnik"
    },
    {
      numeroQuestao: "5",
      questao: "Qual console foi o primeiro a ser lançado pela Sony?",
      respostas: ["PlayStation", "PS2", "PSP", "PS3", "PS4"],
      respostaCerta: "PlayStation"
    },
    {
      numeroQuestao: "6",
      questao: "Em 'The Legend of Zelda', qual é o nome da princesa que Link tenta salvar?",
      respostas: ["Peach", "Daisy", "Zelda", "Samus", "H. Romeu"],
      respostaCerta: "Zelda"
    },
    {
      numeroQuestao: "7",
      questao: "Qual jogo da Rockstar é famoso por sua temática de faroeste?",
      respostas: ["GTA 5", "L.A. Noire", "Max Payne", "Red Dead Redemption", "Manhunt"],
      respostaCerta: "Red Dead Redemption"
    },
    {
      numeroQuestao: "8",
      questao: "Quem é o criador do jogo 'Minecraft'?",
      respostas: ["Markus 'Notch' Persson", "John Carmack", "Shigeru Miyamoto", "Hideo Kojima", "Will Wright"],
      respostaCerta: "Markus 'Notch' Persson"
    },
    {
      numeroQuestao: "9",
      questao: "Qual foi o primeiro jogo a apresentar o personagem Master Chief?",
      respostas: ["Halo 3", "Halo: Reach", "Halo 2", "Halo: Combat Evolved", "Destiny"],
      respostaCerta: "Halo: Combat Evolved"
    },
    {
      numeroQuestao: "10",
      questao: "Em qual jogo o personagem principal se chama 'Link'?",
      respostas: ["Final Fantasy VII", "The Legend of Zelda", "Super Mario Bros", "Metroid", "Castlevania"],
      respostaCerta: "The Legend of Zelda"
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router,
              private alertController: AlertController,
              private toastController: ToastController
            )
  {
    const nav = this.router.getCurrentNavigation();
    this.quiz = nav?.extras?.state?.['paramQuiz'];
  }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.quiz = getNav.extras.state['paramQuiz'];
      }
    });
    this.quiz = this.listaQuiz[this.questao];
  }

  nextQuiz(){

    if (this.respostaSelecionada == this.quiz.respostaCerta) {
      this.pontuacaoJogador++;
    }

    this.questao++;
    if (this.questao < this.listaQuiz.length) {
      this.quiz = this.listaQuiz[this.questao];
    } else {
      this.questao = 0;
      this.quiz = this.listaQuiz[this.questao];
      this.showAlert('Fim do Quiz');
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Quiz Finalizado',
      message: message,
      subHeader: `Você ficou com ${this.pontuacaoJogador} pontos`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
