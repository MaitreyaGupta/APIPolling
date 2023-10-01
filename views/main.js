class Poll{
    constructor(root,title){
        this.root=root
        this.selected=sessionStorage.getItem("poll-selected")
        this.endpoint="http://localhost:5000"

        this.root.insertAdjacentHTML("afterbegin",
        <div class="poll__title">${title}</div>)

        this._refresh()

         
    }
    async  _refresh(){
            const response=await fetch(this.endpoint)
            const data=await response.json()

            this.root.querySelector(".poll__option").forEach(element => {
                element.remove();                
            });

            for(const element of data)
            {
                const template=document.createElement("template")
                const fragment=template.element

                template.innerHTML=  " <div class="poll__option" ${this.selected=element.label}><div class="poll__option__fill"></div><div class="poll__option__info"></div><span clas="poll__label">${element.label} </span><span class="poll__label">${element.percentage}%</span> </div>"
            }
            if(!this.selected)
            {
                fragment.querySelector(".poll__option").addEventListener("click",function(){
                    fetch(this.endpoint,{
                        method:"post",
                        body:"add=${option.label}"
                    }).then(()=>
                    {
                        this.selected=element.label

                        sessionStorage.setItem("poll__selected",element.label);
                    }
                })
            }

            this.root.appendCHild(fragment);
    }
}
var a=document.querySelector(".poll")
 
const p=new Poll(document.querySelector(".poll"),"which do you prefer");

console.log(p)
