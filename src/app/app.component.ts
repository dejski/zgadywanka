import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h2>Zgadnij numer !!!</h2>
        <div class="card bg-light mb-3">
           <div class="card-body">
              <p class="card-text">Zgadnj wylosowany numer między 1 a 1000.</p>
           </div>
        </div>
       <div>
         <label class="labelka">Twoja próba: </label>
         <input type="number" [value]="guess" (input)="guess = $event.target.value" />
         <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Sprawdź</button>
         <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
       </div>
      <div>
         <p *ngIf="deviation<0" class="alert alert-warning">Podałeś za dużo!</p>
         <p *ngIf="deviation>0" class="alert alert-info">Podałeś za mało!</p>
         <p *ngIf="deviation===0" class="alert alert-success">Tak! Brawo.</p>
      </div>
      <p class="text-info">Liczba prób: :
        <span class="badge">{{noOfTries}}</span>
      </p>
  </div>
  `,
})
export class AppComponent {
  deviation: number
  noOfTries: number
  original: number
  guess: number

  constructor() {
    this.initializeGame()
  }
  initializeGame() {
    this.noOfTries = 0
    this.original = Math.floor(Math.random() * 1000 + 1)
    this.guess = null
    this.deviation = null
  }
  verifyGuess() {
    this.deviation = this.original - this.guess
    this.noOfTries = this.noOfTries + 1
  }
}
