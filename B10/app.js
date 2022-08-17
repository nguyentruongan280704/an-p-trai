// bài 2

// let btn = document.getElementById("btn");
// let div = document.getElementById("css");
// btn.onclick = function () {
//     let a = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     let c = Math.floor(Math.random() * 256)
//     let color = `${a},${b},${c}`
//     div.style.backgroundColor = `rgb(${color})`
// }

// bài 3

// let div1 = document.getElementById("text1");
// let div2 = document.getElementById("text2");
// let btn = document.getElementById("btn");

// btn.onclick = function () {
//     temp = ""
//     console.log(div1.innerText);
//     console.log(div2.innerText);
//     temp = div1.innerText
//     div1.innerText = div2.innerText
//     div2.innerText = temp
// }

// bài 4
 let btn = document.getElementById("btn");
let div = document.getElementById("css");
btn.onclick = function () {
    if (div.style.borderRadius == "10px") {
        div.style.borderRadius = "200px"
    } else { div.style.borderRadius = "10px" }
}