export interface ImportModel {
    id: number;
    completed: boolean;
    faulted: boolean;
    error: string;
    progress: number;
    initiatedBy: string;
}
