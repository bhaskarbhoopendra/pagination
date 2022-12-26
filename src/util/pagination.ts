const pagination = (data: any) => {
    const itemsPerPage = 9;
    const pages = Math.ceil(data.length / itemsPerPage);

    return Array.from({length: pages}, (_, index) => {
        const start = index * itemsPerPage;
        return data.slice(start, start + itemsPerPage)

    })
}
export default pagination;