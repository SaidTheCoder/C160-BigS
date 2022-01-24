AFRAME . registerComponent("place-side-view",{
    init:function(){
        this.createplaces()
    },
    tick:function(){
        const placescontainer = document.querySelector("#places-container")
        const {state} = placescontainer.getAttribute("tour")
        if(state==="view" || state==="change-view"){
            this.el.setAttribute("visible",true)
        }
        else{
            this.el.setAttribute("visible",false)
        }
    },
    createplaces:function(){
        const sideviewcontainer=document.querySelector("#side-view-container")
        let previousXPosition = -150
        let previousYPosition = 30
        for(var i = 1; i <= 4; i ++){
            const position = {
                x:previousXPosition += 50,
                y:previousYPosition += 2,
                z:-40
            }
            const entityel = this.createplacethumbnail(position,i)
            sideviewcontainer.appendChild(entityel)
        }
    },
    createplacethumbnail:function(position,id){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("visible",true)
        entityel.setAttribute("id",`place-${id}`)
        entityel.setAttribute("geometry",{primitive:"circle",radius:2.5})
        entityel.setAttribute("material",{src:"./assets/helicopter.png",opacity:0.9})
        entityel.setAttribute("position",position)
        entityel.setAttribute("cursor-listener",{})
        return entityel
    }

})