import { Diff } from "./generics";

export interface IAnyObj {
	[key: string]: any;
}

export function objectValues<T extends {}>(
	obj: T
): Diff<T[keyof T], undefined>[] {
	const keys = Object.keys(obj);
	return keys.map(e => obj[e]) as any;
}
export function arrayToObject<T extends {}, K extends keyof T>(
	arr: T[],
	mainKey: K
): { [key: string]: T | undefined } {
	const obj: { [key: string]: T | undefined } = {};
	for (let i = 0; i < arr.length; ++i) {
		obj[arr[i][mainKey as any]] = arr[i];
	}
	return obj;
}

export const reflectPromise = <T>(p): Promise<IReflectPromiseRes<T>> =>
	p
		.then(v => ({ v, status: "resolved" }))
		.catch(e => ({ e, status: "rejected" }));
export type IReflectPromiseRes<T> =
	| { v: T; status: "resolved" }
	| { e: Error; status: "rejected" };

export const delayPromise = (milliseconds: number) =>
	new Promise(resolve => setTimeout(resolve, milliseconds));

export function mergeRecursive<T1 extends IAnyObj, T2 extends IAnyObj>(
	object1: T1,
	object2: T2
): T1 & T2 {
	const obj1 = { ...object1 };
	const obj2 = { ...object2 };
	for (const p in obj2) {
		if (obj2.hasOwnProperty(p)) {
			try {
				// Property in destination object set; update its value.
				if (obj2[p].constructor === Object) {
					obj1[p] = mergeRecursive(obj1[p], obj2[p]);
				} else {
					obj1[p] = obj2[p] as any;
					if (obj1[p] === undefined) delete obj1[p];
				}
			} catch (e) {
				// Property in destination object not set; create it and set its value.
				obj1[p] = obj2[p] as any;
				if (obj1[p] === undefined) delete obj1[p];
			}
		}
	}

	return obj1 as any;
}

export function removeKeys<T, K extends keyof T>(
	obj: T,
	...keys: K[]
): Omit<T, K> {
	const obj2 = { ...obj };
	for (let i = 0; i < keys.length; ++i) {
		delete obj2[keys[i]];
	}
	return obj2;
}

export function getUniqueValues<T>(...args: (T[] | Set<T>)[]): T[] {
	const values: T[] = [];
	for (const arg of args) {
		values.push(...arg);
	}
	return [...new Set(values)];
}

export function mapValues<
	KeyT extends string | number | symbol,
	ValueT,
	NewValueT
>(
	obj: Record<KeyT, ValueT>,
	mapFn: (key: ValueT) => NewValueT
): Record<KeyT, NewValueT> {
	const res = {} as Record<KeyT, NewValueT>;
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			res[key] = mapFn(obj[key]);
		}
	}
	return res;
}

export function filterKeys<ValueT>(
	obj: Record<string, ValueT>,
	filterFn: (value: ValueT) => boolean
): string[] {
	const result: string[] = [];
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const val = obj[key];
			if (filterFn(val)) {
				result.push(key);
			}
		}
	}
	return result;
}
