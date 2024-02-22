import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prohibited-words',
  templateUrl: './prohibited-words.component.html',
  styleUrl: './prohibited-words.component.scss'
})
export class ProhibitedWordsComponent {
  public staticTxt = 'Bad words: ';
  public noStaticTxtContent: string = '';
  public inputWordValue!:string;
  public textareaValue = '';
  public badWords: string[] = [];

  addWord(): void {
    if (this.inputWordValue === '') {
      return;
    }
    if (this.noStaticTxtContent.length > 0) {
      this.noStaticTxtContent += ', ' + this.inputWordValue;
    } else {
      this.noStaticTxtContent = this.inputWordValue;
    }

    this.inputWordValue = '';
  }
  reset(): void {
    this.inputWordValue = '';
    this.noStaticTxtContent = '';
    this.textareaValue = '';
  }
  censor(): void {
  this.badWords = this.noStaticTxtContent.split(', ');
    this.badWords.forEach((badWord) => {
      const regex = new RegExp('\\b' + badWord + '\\b', 'gi');
      this.textareaValue = this.textareaValue.replace(regex, '*'.repeat(badWord.length));
    });    
  }
}
