let oDiv = document.createElement('div');
oDiv.style.width="50px"
oDiv.style.height = '50px'
oDiv.style.background= 'red'
oDiv.style.position='absolute'
oDiv.style.zIndex='100'
oDiv.className="122312"

let Elem = document.querySelector(".editor-template-list");
let reci = document.querySelector('#ueditor_0').contentWindow.document.body;



oDiv.onclick=(e)=>{

    e.stopPropagation();
        dElem = e.target.parentElement;

        dElem.style.listStyle = "none";

        // console.log(dElem);
        reci.appendChild
}



// Elem= document.querySelector("ul");


for(let i = 0;i < Elem.children.length ;i++){


    Elem.children[i].addEventListener('click',(e)=>{

        e.preventDefault();
        e.stopPropagation();
        dElem = Elem.children[i];


        dElem.style.listStyle = "none";
        dElem.append(oDiv)

        console.dir(e.target)


        oDiv.style.top = e.target.offsetTop+'px'
        oDiv.style.left  = e.target.offsetLeft +20 +'px'

    })
    // Elem.children[i].addEventListener('mouseover',(e)=>{


    //     e.stopPropagation();
    //     dElem = Elem.children[i];


    //     dElem.style.listStyle = "none";
    //     dElem.append(oDiv)

    //     console.dir(e.target)


    //     oDiv.style.top = e.target.offsetTop+'px'
    //     oDiv.style.left  = e.target.offsetLeft +330 +'px'

    // })
}
