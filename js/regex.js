const REGEX = () => {
    let form = document.querySelectorAll('form')
    for (const item of form) {
        item.onsubmit = () => {
            event.preventDefault()
            let fm = new FormData(item)
            let Create_New_Task = {
                id: Math.random().toString().split(2, 10),
                increase: true,
                rise: false,
            }
            fm.forEach((a, b) => {
                Create_New_Task[b] = a
            });
            axios.post(`http://localhost:3001/user`, Create_New_Task)
        }
    }
}

export default REGEX