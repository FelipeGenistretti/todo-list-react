export enum TaskState {
    "creating",
    "created"
} 
    
export const TASK_KEY = "task"

export interface Task{
    id:string;
    title:string;
    concluded?: boolean;
    state? : TaskState;
}