const classCheck = (page, currentPage) => {
    let classes = "";
    if (currentPage === page) classes += "active"
    return classes;
}

export default classCheck;