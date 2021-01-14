export interface User extends Document {
    readonly name: string;
    readonly country: string;
    readonly countrycode: string;
}