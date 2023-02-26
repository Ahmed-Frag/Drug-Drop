let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let boxs = document.querySelectorAll(".box")
let drag = null

btn.addEventListener('click',()=>{
    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>
        `
        inp.value=''
    }

    dragItem();
})
function dragItem(){
    let items = document.querySelectorAll('.item')
    items.forEach((item)=>{
        item.addEventListener('dragstart', ()=>{
            drag = item;
            item.style.opacity = '0.5';
        })

        item.addEventListener('dragend', ()=>{
            drag = null;
            item.style.opacity = '1';
        })


        boxs.forEach((box)=>{
            box.addEventListener('dragover',(e)=>{
             e.preventDefault()
                box.style.background = 'violet'
                box.style.color = 'white'
            })

            box.addEventListener('dragleave',()=>{
                box.style.background = 'white'
                box.style.color = 'black'
            })


            box.addEventListener('drop',()=>{
                box.append(drag)
                box.style.background = 'white'
                box.style.color = 'black'
            })

        })


    })
}