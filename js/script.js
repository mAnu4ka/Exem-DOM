import reg from './regex.js'
import Text from './Text.js'
import datafolse from './datafolse.js'
import search from './search.js'
import Buton from './Buton.js'
import patch from './patch.js'
let arrs

axios.get(`http://localhost:3001/user/`)
    .then(function (response) {
        CreateElement(response.data)
        arrs = response.data
    })
    .catch(function (error) {
        console.log(error);
    })

const CreateElement = (arr) => {
    let main = document.querySelector('main')
    main.innerHTML = " "
    for (let item of arr) {
        main.innerHTML += `<div class="user" >
            <span class='namess' id='${item.id}'>${item.name}</span>
            <div class="right-side">
                <input type='number' value='${item.salary}' id='${item.id}' class='inp'></input>
                <button id='${item.id}' class='delete' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg></button>
                <button id='${item.id}' class='premia' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class='star' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div> `
    }
    reg()
    Text(arr)
    datafolse(arr)
    patch(arr)
    let rob_ser = document.querySelector('.rob-search')

    rob_ser.onkeyup = () => {
        if (search(arr, rob_ser).length == 0 || rob_ser.value.length == 0) CreateElement(arrs)
        else CreateElement(search(arr, rob_ser));
    }
    let buts = document.querySelectorAll('.btn')
    for (const item of buts) {
        item.onclick = () => {
            let arrsz = []
            CreateElement(Buton(arrs, item, arrsz));
        }
    }

}
