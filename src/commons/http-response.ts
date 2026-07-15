export interface HttpResponse<T> {
    data: T;
    http_status: number;
}