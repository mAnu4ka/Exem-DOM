const what_to_do = (arr, item,arrs) => {
    let what = item.getAttribute('data-what')
    if (what == 'goup') {
        for (const item of arr) {
            if (item.rise == true) {
                arrs.push(item)
            }
        }
    } else if (what == 'slary__1000') {
        for (const item of arr) {
            if (item.salary >= 1000) {
                arrs.push(item)
            }
        }
    } else {
        for (const item of arr) {
            arrs.push(item)
        }
    }
    return arrs
}
export default what_to_do