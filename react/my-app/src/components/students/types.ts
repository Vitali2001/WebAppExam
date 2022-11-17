export interface IStudentItem{
    id: number,
    lName: string,
    fName: string,
    mName: string,
    subject: string
}

export interface StudentsState{
    list: Array<IStudentItem>,
    loading: boolean
}