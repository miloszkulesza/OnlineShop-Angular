export default interface ApiResponse {
    statusCode: number;
    reasonPhrase: string;
    content: string;
    isSuccessStatusCode: boolean;
}