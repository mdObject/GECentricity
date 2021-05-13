export class ArrayAsync<T> //implements Array<T>
{
    _data: Array<T> = new Array<T>();

    /**
     * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
     */
    get length(): number {
        return this._data.length;
    }
    /**
     * Returns a string representation of an array.
     */
    toString(): string {
        return this._data.toString();
    }
    /**
     * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
     */
    toLocaleString(): string {
        return this._data.toLocaleString();
    }
    /**
     * Removes the last element from an array and returns it.
     */
    pop(): T | undefined
    {
        return this._data.pop();
    }
    /**
     * Appends new elements to an array, and returns the new length of the array.
     * @param items New elements of the Array.
     */
    push(...items: T[]): number {
        return this._data.push(...items);
    }
    /**
     * Combines two or more arrays.
     * @param items Additional items to add to the end of array1.
     */
    concat(...items: (T | ConcatArray<T>)[]): T[] {
        return this._data.concat(...items);
    }
    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
     */
    join(separator?: string): string {
        return this._data.join(separator);
    }
    /**
     * Reverses the elements in an Array.
     */
    reverse(): T[] {
        return this._data.reverse();
    }
    /**
     * Removes the first element from an array and returns it.
     */
    shift(): T | undefined {
        return this._data.shift();
    }
    /**
     * Returns a section of an array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
     */
    slice(start?: number, end?: number): T[] {
        return this._data.slice(start, end);
    }
    /**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this {
        this._data = this._data.sort(compareFn);
        return this;
    }
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     */
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[] {
        return this._data.splice(start, deleteCount, ...items);
    }



    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        return this._data.forEach(callbackfn, thisArg);
    }

    [Symbol.iterator]() {
        return this._data.values();
    }

    //[n: number]: T { return this._data[n] }

}