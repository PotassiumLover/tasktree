import Task from "./Task";

export default interface Project {
    name: string,
    description?: string,
    root?: Task,
    progress: number,
}

export const BlankProject: Project = {
    name: 'blank',
    progress: 0
}