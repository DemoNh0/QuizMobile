import { IQuiz, IUser } from './../model/IQuiz';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})


export class Tab1Page {

  constructor(public router: Router,
              private alertController: AlertController,
              private toastController: ToastController
              ) {}



  jogador: IUser [] = [
    {
      nome: this.user,
      pontuacao: 0
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

  irParaQuiz(quiz: IQuiz){
    const navigationExtras: NavigationExtras = {state:{paramQuiz:quiz}};
    this.router.navigate(['/quiz'], navigationExtras);
  }
};

