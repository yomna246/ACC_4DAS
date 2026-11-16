import { Component } from '@angular/core';
import { ConferenceList } from './conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
