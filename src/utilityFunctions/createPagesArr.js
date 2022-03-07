const createPagesArr = (start, pagesCount) => {
    let arr = [];
    for (let i = start; i < pagesCount + 1; i++) {
        arr.push(i);
    }
    return arr;
}

export default createPagesArr;