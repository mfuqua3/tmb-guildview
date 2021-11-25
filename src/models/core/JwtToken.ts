export interface JwtTokenHeader {
    algorithm: string;
    type: string;
}
export interface JwtTokenPayload<T> {
    data: T;
    notBefore: number;
    expires: number;
    issuedAt: number;
    issuer: string;
    audience: string;
}
export interface JwtToken<T> {
    header: JwtTokenHeader;
    payload: JwtTokenPayload<T>
}
