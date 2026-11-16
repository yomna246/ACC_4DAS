import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  // two-way data binding avec [(ngModel)]
  searchTerm = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular Day',
      description: 'Les nouveautés d’Angular 21 : composants, signals et contrôle de flux.',
      date: new Date('2026-12-03T09:30:00'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 60,
    },
    {
      id: 2,
      title: 'Cloud & DevOps',
      description: 'CI/CD, conteneurs et déploiement automatisé.',
      date: new Date('2026-12-12T14:00:00'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 45,
    },
    {
      id: 3,
      title: 'Cybersécurité',
      description: 'Bonnes pratiques de sécurité pour les applications web.',
      date: new Date('2027-01-21T18:00:00'),
      place: 'Sfax',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  // conférences à venir dont le titre contient le texte recherché
  get filteredConferences(): Conference[] {
    const now = new Date();
    const term = this.searchTerm.trim().toLowerCase();
    return this.conferences.filter(
      (c) => c.date >= now && c.title.toLowerCase().includes(term),
    );
  }

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  register(c: Conference): void {
    if (this.placesRestantes(c) > 0) {
      c.nbParticipants++;
    }
  }
}
