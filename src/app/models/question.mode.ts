import { Quiz } from "./quiz.model";

export class Question{
    constructor(
        private _questionId: number,
        private _questionText: string,
        private _pointsAssigned: number,
        private _homeQuiz: Quiz,
    ){}
    
    get questionId(): number {
        return this._questionId;
    }

    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    get questionText(): string {
        return this._questionText;
    }

    set questionText(questionText: string) {
        this._questionText = questionText;
    }

    get pointsAssigned(): number {
        return this._pointsAssigned;
    }

    set pointsAssigned(pointsAssigned: number) {
        this._pointsAssigned = pointsAssigned;
    }

    get homeQuiz(): Quiz {
        return this._homeQuiz;
    }

    set homeQuiz(homeQuiz: Quiz) {
        this._homeQuiz = homeQuiz;
    }
}