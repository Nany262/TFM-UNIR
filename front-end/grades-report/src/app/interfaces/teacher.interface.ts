export interface TeacherInterface {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    subjects: {
        name: string,
        progress: string
    }[]
}
