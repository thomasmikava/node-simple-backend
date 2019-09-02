export type Diff<T, U> = T extends U ? never : T;
export type NotUndefined<T> = Diff<Diff<T, undefined>, null>;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
	Partial<{ [key in K]: T[K] }>;
export type OptionalKeysOtherThan<T extends {}, K extends keyof T> = Partial<
	Omit<T, K>
> &
	{ [key in K]: T[K] };

export interface IAnyObj {
	[key: string]: any;
	[key: number]: any;
}

export type WithKnownKeyType<
	T extends {},
	key extends keyof T,
	newType extends T[key]
> = Extract<T, { [k in key]: newType }>;

export type ReplaceKeyType<T extends {}, K extends keyof T, NewT> = Omit<T, K> &
	{
		[E in keyof T & K]: NewT;
	};

export type NotUndefinedKey<T extends {}, K extends keyof T> = ReplaceKeyType<
	T,
	K,
	NotUndefined<T[K]>
>;
