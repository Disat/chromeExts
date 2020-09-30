function getElem(){
   return ElemList =
}

let Elem = document.querySelector(".editor-template-list");

// let iframeTag = document.querySelector('#ueditor_0').contentWindow
// let reci = iframeTag.document.body

let reci = document.querySelector('#autoparagraph');
// console.log(reci);

// console.log(Elem.children[0]);

// let cloneNode =  Elem.children[1].cloneNode(true)

// reci.appendChild(cloneNode)
let divDom = document.createElement('div')


for(let i = 0;i < Elem.children.length ;i++){
    Elem.children[i].addEventListener('hover',(e)=>{

    })

    Elem.children[i].addEventListener('click',(e)=>{
        e.stopPropagation();
        dElem = Elem.children[i];

        dElem.style.listStyle = "none";

        console.log(dElem);
        reci.appendChild

    })
}