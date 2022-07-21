import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ekko-roll-em',
  templateUrl: './roll-em.component.html',
  styleUrls: ['./roll-em.component.scss'],
})
export class RollEmComponent {
  @ViewChild('playingTable') playingTable: ElementRef | undefined;

  diceFaces = '⚀⚁⚂⚃⚄⚅';
  dice: number[] = [0, 0, 0, 0, 0];

  onRoll(): void {
    // fill the dice array with our rolled values
    for (let i = 0; i < 5; i++) {
      this.dice[i] = this.rollDie();
    }

    // this is an array of the rendered dice
    const renderedDice = [];
    for (let a = 0; a < 6; a++) {
      renderedDice[a] = this.renderDice(this.dice[a]);
    }

    // go through and add them to the playing table
    for (let b = 0; b < 5; b++) {
      if (!this.playingTable) return;

      if (b < 1) {
        this.playingTable.nativeElement.innerHTML =
          '<span class="die die-' + b + '">' + renderedDice[b] + '</span>';
      } else {
        this.playingTable.nativeElement.innerHTML =
          this.playingTable.nativeElement.innerHTML +
          '<span class="die die-' +
          b +
          '">' +
          renderedDice[b] +
          '</span>';
      }
    }
  }

  // output a random number from 1 to 6
  private rollDie(): number {
    return Math.floor(Math.random() * 6 + 1);
  }

  // convert the dice from numbers to dice shapes
  private renderDice(d: number): string {
    switch (d) {
      case 1:
        return '⚀';
      case 2:
        return '⚁';
      case 3:
        return '⚂';
      case 4:
        return '⚃';
      case 5:
        return '⚄';
      default:
        return '⚅';
    }
  }
}
