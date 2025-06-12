import { IQuiz } from './../model/IQuiz';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {

  quiz: IQuiz;

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
  }

}
