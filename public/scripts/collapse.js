let hidden = false

function hideSlow(){
  $("#nav-collapsable").slideUp("slow")
  hidden = true
}
function hide(){
  $("#nav-collapsable").hide()
  hidden = true
}

function showSlow(){
  $("#nav-collapsable").slideDown("slow")
  hidden = false
}
function show(){
  $("#nav-collapsable").show()
  hidden = false
}

$("#nav-collapse-btn").click(() => {
  if (!hidden) {
    hideSlow()
  }
  else {
    showSlow()
  }
})

window.onresize = () => {
  if(window.innerWidth >= breakpoints.lg) {
    show()
  }
  else {
    hide()
  }
}


if(window.innerWidth < breakpoints.lg) hide()
