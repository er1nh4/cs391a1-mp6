export type GoogleUser = {
    sub: string; // Google unique user ID
    name: string;
    email: string;
    picture: string;
    locale?: string;
};
