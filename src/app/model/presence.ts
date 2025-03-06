export interface Presence {

    id: number;
  collaboratorId: number;
  date: Date;
  period: 'morning' | 'afternoon' | 'full';
}

export interface Collaborator {
  id: number;
  name: string;

}
