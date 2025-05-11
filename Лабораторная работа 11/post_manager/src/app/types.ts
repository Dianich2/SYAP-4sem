export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type TNewPost = Omit<TPost, 'id' | 'userId'>

export interface IButtonProps{
    title: string,
    func: (() => void),
    classname?: string
}

