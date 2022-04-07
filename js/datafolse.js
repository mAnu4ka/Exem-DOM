const datafolse = (arr) => {
    let allprem = document.querySelectorAll('.premia')
    let deletes = document.querySelectorAll('.delete')
    for (const item of allprem) {
        item.onclick = () => {
            let id = item.id
            let find = arr.find(item => item.id == id)
            let idx = arr.indexOf(find)
            if (arr[idx].increase == true) {
                arr[idx].increase = false
            } else arr[idx].increase = true
            axios.patch(`http://localhost:3001/user/${id}`, arr[idx])
        }
    }

    for (const item of deletes) {
        item.onclick = () => {
            let id = item.id
            axios.delete(`http://localhost:3001/user/${id}`)
        }
    }
    let users = document.querySelectorAll('.namess')

    for (const user of users) {
        for (const item of arr) {
            if (item.rise == true && item.id == user.id) {
                let child = user.nextSibling.nextSibling.nextSibling.nextSibling
                child.style.display = 'block'
            }
        }
        user.onclick = () => {
            let find = arr.find(item => item.id == user.id)
            let idx = arr.indexOf(find)
            if (arr[idx].rise == true) {
                arr[idx].rise = false
            } else arr[idx].rise = true
            axios.patch(`http://localhost:3001/user/${user.id}`, arr[idx])
        }
    }

}
export default datafolse