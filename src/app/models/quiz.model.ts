import { Question } from "./question.mode";
import { User } from "./user.model";

export class Quiz{
    constructor(
        private _quizId: number,
        private _title: string,
        private _owner: User,
        private _quizScore: number,
        private _questions: Question[],
    ){}

    get quizId(): number {
        return this._quizId;
    }

    set quizId(quizId: number) {
        this._quizId = quizId;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get owner(): User {
        return this._owner;
    }

    set owner(owner: User) {
        this._owner = owner;
    }

    get quizScore(): number {
        return this._quizScore;
    }

    set quizScore(quizScore: number) {
        this._quizScore = quizScore;
    }

    public get questions(): Question[] {
        return this._questions;
    }
    
    public set questions(value: Question[]) {
        this._questions = value;
    }
}