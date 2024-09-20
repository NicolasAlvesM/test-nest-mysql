export enum TaskStatus {
  Pending = 'pending',
  In_progress = 'in_progress',
  Completed = 'completed',
}

export interface TaskFilter {
  status?: TaskStatus;
  userId?: number;
}
