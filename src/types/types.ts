export enum HeaderColors {
    dark = "dark",
    white = "white"
}
export type HeaderStyle = {
    isTransparent: boolean,
    color?: HeaderColors,
    textColor?: HeaderColors
}


export enum FilmsType {
    my = "my",
    all = "all"
}

export type Film = {
    countryName: string
    description: string
    directorName: string
    id?: string
    title: string
    year: number
    ratings: [
        {
          ratingTypeName: string,
          value: number
        }
    ]
}
export type Films = {
    films: Film[],
    sectionName?: any

}
export type AddFilmType = {
    filmId: string
    sectionName?: string
}

export type LoginType = {
    nickName: string,
    password: string,
    email?: string,
}
export type UserData = {
    name: string,
    secondName: string,
    phoneNumber: string,
    userId: number
}
export type AccessType = {
    accessToken: string,
    expirationDate: string
}

export enum ModalType {
    mobileMenu = "mobileMenu",
    justModal = "justModal",
    error = "error"
}