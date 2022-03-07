// import _ from "lodash"

const paginate = (items, pageNumber, pageSize) => {
    const startIndx = (pageNumber - 1) * pageSize
    return items.slice(startIndx, (startIndx + pageSize));
}

export default paginate;