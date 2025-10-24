export type FlatObject<T> = { [P in keyof T]: T[P] };
