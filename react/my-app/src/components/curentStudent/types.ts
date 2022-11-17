export interface ICurrentStudent{
    id: number,
    lName: string,
    fName: string,
    mName: string,
    subject: string
}


export interface CurrentStudentState{
    currentStudent: ICurrentStudent,
    selected: boolean
} 
