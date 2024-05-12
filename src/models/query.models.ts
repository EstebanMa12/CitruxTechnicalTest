
export interface questionResponse {
    role: string,
    content: string
}
export interface queryModel {
    userQuestion: questionResponse,
    aiResponse: questionResponse,
    articleId: string,
    _id: string,
}