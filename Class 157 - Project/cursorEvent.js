AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: {type: "string", default: ""}
    },
  
    init: function() {
      this.handleMouseEnterEvents()
      this.handleMouseLeaveEvents()
    },
  
    handlePlacesList: function() {
      const id = this.el.getAttribute("id")
      const placesId = ["super_man", "spider_man", "captain_aero", "outer_space"];
      if (placesId.includes(id)) {
        const placesContainer = document.querySelector("#cover-container")
        placesContainer.setAttribute("cursor-listener", {selectedItemId: id})
        this.el.setAttribute("material", {color: "orange", opacity: 1})
      }
    },
  
    handleMouseEnterEvents: function() {
      this.el.addEventListener("mouseenter", ()=>{
        this.handlePlacesList()
      })
    },
  
    handleMouseLeaveEvents: function() {
      this.el.addEventListener("mouseleave", ()=>{
        const {selectedItemId} = this.data
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if (id === selectedItemId) {
            el.setAttribute("material", {color: "#0077CC", opacity: 1})
          }
        }
      })
    },
  });
  