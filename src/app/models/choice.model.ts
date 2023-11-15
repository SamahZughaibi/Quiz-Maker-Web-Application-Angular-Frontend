import { Question } from "./question.mode";

export class Choice{
    constructor(
        private _choiceId: number,
        private _choiceText: string,
        private _correctAnswer: boolean,
        private _homeQuestion: Question,
    ){}
    
    get choiceId(): number {
        return this._choiceId;
    }

    set choiceId(choiceId: number) {
        this._choiceId = choiceId;
    }

    get choiceText(): string {
        return this._choiceText;
    }

    set choiceText(choiceText: string) {
        this._choiceText = choiceText;
    }

    get correctAnswer(): boolean {
        return this._correctAnswer;
    }

    set correctAnswer(correctAnswer: boolean) {
        this._correctAnswer = correctAnswer;
    }

    get homeQuestion(): Question {
        return this._homeQuestion;
    }

    set homeQuestion(homeQuestion: Question) {
        this._homeQuestion = homeQuestion;
    }
}