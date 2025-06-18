import { NavigationExtras, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz, IUser } from './../model/IQuiz';
import { AlertController, ToastController } from '@ionic/angular';
import{ IonicStorageModule } from '@ionic/storage-angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private alertController: AlertController,
                private toastController: ToastController
              ) {}

  user: any;
  pontuacao: any;

  listaJogador: IUser[] = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.user = params.get('jogador') ?? '';
      this.pontuacao = params.get('pontos') ?? '';

      const jogadoresSalvos = localStorage.getItem('jogadores');
      if (jogadoresSalvos) {
        this.listaJogador = JSON.parse(jogadoresSalvos);
      } else {
        this.listaJogador = [];
      }

      if (this.user) {
        const pontuacaoAtual = Number(this.pontuacao);
        const jogadorExistente = this.listaJogador.find(j => j.nome === this.user);
        if (jogadorExistente) {
          if (pontuacaoAtual > jogadorExistente.pontuacao) {
            jogadorExistente.pontuacao = pontuacaoAtual;
          }
        } else {
          this.listaJogador.push({
            nome: this.user,
            pontuacao: pontuacaoAtual
          });
        }
      }

      this.listaJogador.sort((a: IUser, b: IUser) => b.pontuacao - a.pontuacao);
      this.listaJogador = this.listaJogador.slice(0, 10);
      localStorage.setItem('jogadores', JSON.stringify(this.listaJogador));
    });
  }
}
