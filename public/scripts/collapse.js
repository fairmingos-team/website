let hidden = false

$("#nav-collapse-btn").click(() => {
  if (!hidden) {
    $("#nav-collapsable").hide("slow")
  }
  else {
    $("#nav-collapsable").show("slow")
  }

  hidden = !hidden
})

window.onresize = () => {
  if(window.innerWidth >= 720 && hidden) {
    $("#nav-collapsable").show()
    hidden = false
  }
}
