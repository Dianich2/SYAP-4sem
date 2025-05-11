export interface ITask{
    name: string,
    isDone: boolean,
    id: number
}

export interface IButtonProps{
    title: string,
    func: (() => void),
    classname?: string
}


export interface ITaskProps{
    name: string,
    isDone: boolean,
    func1: () => void,
    classname?: string,
    func2: () => void,
}
