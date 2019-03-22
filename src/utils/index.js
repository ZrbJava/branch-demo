// 存储数组
export function setArray(key, arr) {
    let arrString = JSON.stringify(arr);
    sessionStorage.setItem(key, arrString);
}

export function getArray(key) {
    let arrString = sessionStorage.getItem(key);
    if (arrString) {
        return JSON.parse(arrString);
    } else {
        return [];
    }
}

// 存储数组
export function setItem(key, item) {
    let itemString = JSON.stringify(item);
    sessionStorage.setItem(key, itemString);
}

export function getItem(key) {
    let itemString = sessionStorage.getItem(key);
    if (itemString) {
        return JSON.parse(itemString);
    } else {
        return {};
    }
}

export function checkPhone(mobile) {
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
        return false;
    }
    return true;
}