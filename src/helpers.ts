export function getCategories(categories: any) {
    let str = ''
    for (const category of categories) {
        str += category.name + " "
    }
    return str;
}

export function getDate(createdAt: any) {
    const milliseconds = Date.parse(createdAt)
    const dateAndTime = new Date(milliseconds)
    const date = dateAndTime.toString().slice(4, 10) + ',' + dateAndTime.toString().slice(10, 15)
    return date;
}