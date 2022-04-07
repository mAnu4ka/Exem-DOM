const Text = (arr) => {
    let text = document.querySelector('.All-rob')
    text.innerHTML = arr.length
    text2(arr)
}
const text2 = (arr) => {
    let text2 = document.querySelector('.All-prem')
    let caunt = 0
    for (const item of arr) {
        if (item.increase == true) {
            caunt++
            text2.innerHTML = caunt
        }
    }
}
export default Text