const patch = (arr) => {
    let inp = document.querySelectorAll('.inp')
    for (const items of inp) {
        items.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                let find = arr.find(item => item.id == items.id)
                let idx = arr.indexOf(find)
                arr[idx].salary = +items.value
                axios.patch(`http://localhost:3001/user/${items.id}`, arr[idx])
            }
        });
    }
}

export default patch