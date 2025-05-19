export interface Equatable<T> {
    equal(x: T): boolean;

    hashCode(): number;

    toString(): string;
}