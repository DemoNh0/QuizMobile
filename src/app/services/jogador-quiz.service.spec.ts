import { TestBed } from '@angular/core/testing';

import { JogadorQuizService } from './jogador-quiz.service';

describe('JogadorQuizService', () => {
  let service: JogadorQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
