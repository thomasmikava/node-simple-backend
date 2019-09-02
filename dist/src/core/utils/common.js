"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectValues(obj) {
    const keys = Object.keys(obj);
    return keys.map(e => obj[e]);
}
exports.objectValues = objectValues;
function arrayToObject(arr, mainKey) {
    const obj = {};
    for (let i = 0; i < arr.length; ++i) {
        obj[arr[i][mainKey]] = arr[i];
    }
    return obj;
}
exports.arrayToObject = arrayToObject;
exports.reflectPromise = (p) => p
    .then(v => ({ v, status: "resolved" }))
    .catch(e => ({ e, status: "rejected" }));
exports.delayPromise = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
function mergeRecursive(object1, object2) {
    const obj1 = { ...object1 };
    const obj2 = { ...object2 };
    for (const p in obj2) {
        if (obj2.hasOwnProperty(p)) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor === Object) {
                    obj1[p] = mergeRecursive(obj1[p], obj2[p]);
                }
                else {
                    obj1[p] = obj2[p];
                    if (obj1[p] === undefined)
                        delete obj1[p];
                }
            }
            catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
                if (obj1[p] === undefined)
                    delete obj1[p];
            }
        }
    }
    return obj1;
}
exports.mergeRecursive = mergeRecursive;
function removeKeys(obj, ...keys) {
    const obj2 = { ...obj };
    for (let i = 0; i < keys.length; ++i) {
        delete obj2[keys[i]];
    }
    return obj2;
}
exports.removeKeys = removeKeys;
function getUniqueValues(...args) {
    const values = [];
    for (const arg of args) {
        values.push(...arg);
    }
    return [...new Set(values)];
}
exports.getUniqueValues = getUniqueValues;
function mapValues(obj, mapFn) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = mapFn(obj[key]);
        }
    }
    return res;
}
exports.mapValues = mapValues;
function filterKeys(obj, filterFn) {
    const result = [];
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
exports.filterKeys = filterKeys;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbHMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsU0FBZ0IsWUFBWSxDQUMzQixHQUFNO0lBRU4sTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVEsQ0FBQztBQUNyQyxDQUFDO0FBTEQsb0NBS0M7QUFDRCxTQUFnQixhQUFhLENBQzVCLEdBQVEsRUFDUixPQUFVO0lBRVYsTUFBTSxHQUFHLEdBQXFDLEVBQUUsQ0FBQztJQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBVEQsc0NBU0M7QUFFWSxRQUFBLGNBQWMsR0FBRyxDQUFJLENBQUMsRUFBa0MsRUFBRSxDQUN0RSxDQUFDO0tBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUN0QyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFLOUIsUUFBQSxZQUFZLEdBQUcsQ0FBQyxZQUFvQixFQUFFLEVBQUUsQ0FDcEQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FB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