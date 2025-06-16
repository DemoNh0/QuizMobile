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
export class Tab2Page {

  constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private alertController: AlertController,
                private toastController: ToastController
              ) {}

  user: any;
  pontuacao: any;
  listaJogador: IUser[] = [];

  ngOnInit() {

  //   const usuarioSalvo = localStorage.getItem('usuario');
  // if (usuarioSalvo) {
  //   const usuario: IUser = JSON.parse(usuarioSalvo);

  //   this.listaJogador = [usuario];
  // } else {
  //   this.listaJogador = [];
  // }

    this.user = this.activatedRoute.snapshot.paramMap.get('jogador') ?? '';
    this.pontuacao = this.activatedRoute.snapshot.paramMap.get('pontos') ?? '';


    this.listaJogador = [
      {
      nome: this.user,
      pontuacao: Number(this.pontuacao)
      }
    ];

    this.user.sort((a: IUser, b: IUser) => b.pontuacao - a.pontuacao);
  }



}
