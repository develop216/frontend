import { Component, OnInit } from '@angular/core';
import { addDays, startOfWeek, format } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { Presence, Collaborator } from '../../model/presence';

@Component({
  selector: 'app-presence-calendar',
  templateUrl: './presence-calendar.component.html',
  styleUrls: ['./presence-calendar.component.css']
  // Supprimez 'standalone' et 'imports' ici car ce n'est pas un composant standalone
})
export class PresenceCalendarComponent implements OnInit {
  weekStart: Date = startOfWeek(new Date(), { weekStartsOn: 1 });
  weekDays: Date[] = [];
  collaborators: Collaborator[] = [
    { id: 1, name: 'Jonathan B' },
    { id: 2, name: 'Sophie M' },
    { id: 3, name: 'Thomas R' }
  ];
  presences: Presence[] = [];

  selectedCollaborator: Collaborator | null = null;
  selectedDate: Date | null = null;
  selectedPeriod: 'morning' | 'afternoon' | 'full' | null = null;

  ngOnInit() {
    this.generateWeekDays();
    this.initializePresences();
  }

  generateWeekDays() {
    this.weekDays = Array(5).fill(null).map((_, i) => addDays(this.weekStart, i));
  }

  initializePresences() {
    this.presences = [
      { id: 1, collaboratorId: 1, date: this.weekDays[0], period: 'morning' },
      { id: 2, collaboratorId: 1, date: this.weekDays[1], period: 'full' },
      { id: 3, collaboratorId: 2, date: this.weekDays[2], period: 'afternoon' }
    ];
  }

  formatDate(date: Date): string {
    return format(date, 'dd/MM/yyyy', { locale: fr });
  }

  getPresenceForDay(collaboratorId: number, day: Date): Presence[] {
    return this.presences.filter(p =>
      p.collaboratorId === collaboratorId &&
      format(p.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    );
  }

  previousWeek() {
    this.weekStart = addDays(this.weekStart, -7);
    this.generateWeekDays();
  }

  nextWeek() {
    this.weekStart = addDays(this.weekStart, 7);
    this.generateWeekDays();
  }

  addPresence() {
    if (!this.selectedCollaborator || !this.selectedDate || !this.selectedPeriod) {
      return;
    }

    const existingPresence = this.presences.find(p =>
      p.collaboratorId === this.selectedCollaborator!.id &&
      format(p.date, 'yyyy-MM-dd') === format(this.selectedDate!, 'yyyy-MM-dd') &&
      p.period === this.selectedPeriod
    );

    if (existingPresence) {
      this.presences = this.presences.filter(p => p.id !== existingPresence.id);
    } else {
      this.presences.push({
        id: Math.max(...this.presences.map(p => p.id), 0) + 1,
        collaboratorId: this.selectedCollaborator.id,
        date: this.selectedDate,
        period: this.selectedPeriod
      });
    }
  }

  getJourSemaine(date: Date): string {
    // Tableau des jours de la semaine
    const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

    // Retourne le jour de la semaine correspondant
    return joursSemaine[date.getDay()-1];
  }
}