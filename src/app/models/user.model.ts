export class User{
    constructor(
        private _email: string,
        private _fullName: string
    ){}

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(fullName: string) {
        this._fullName = fullName;
    }
}