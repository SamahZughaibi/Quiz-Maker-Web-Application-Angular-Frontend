import { Quiz } from "./quiz.model";
import { User } from "./user.model";

export class QuizResult{
    constructor(
        private _quizResultId: number,
        private _quizTaker: User,
        private _quizTaken: Quiz,
        private _date: string,
        private _totalScore: number,
    ){}
    
    get quizResultId(): number {
        return this._quizResultId;
    }

    set quizResultId(quizResultId: number) {
        this._quizResultId = quizResultId;
    }

    get quizTaker(): User {
        return this._quizTaker;
    }

    set quizTaker(quizTaker: User) {
        this._quizTaker = quizTaker;
    }

    get quizTaken(): Quiz {
        return this._quizTaken;
    }

    set quizTaken(quizTaken: Quiz) {
        this._quizTaken = quizTaken;
    }

    get date(): string {
        return this._date;
    }

    set date(date: string) {
        this._date = date;
    }

    get totalScore(): number {
        return this._totalScore;
    }

    set totalScore(totalScore: number) {
        this._totalScore = totalScore;
    }
}