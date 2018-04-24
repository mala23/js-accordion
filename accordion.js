window.onload = function() {
function initAccordion(accordionElement) {

  function handlePanelClick(event) {
    showPanel(event.currentTarget)
  }

  function showPanel(panel) {
    var expandedPanel = accordionElement.querySelector(".accordion__panel--status-active")
    if (expandedPanel) {
      expandedPanel.classList.remove("accordion__panel--state-active")
      expandedPanel.classList.add("accordion__panel--state-inactive")
    }
    panel.classList.remove("accordion__panel--state-inactive")
    panel.classList.add("accordion__panel--state-active")
  }

  var allPanelElements = accordionElement.querySelectorAll(".accordion__panel")
  
  for (var i = 0; i < allPanelElements.length; i++) {
    allPanelElements[i].addEventListener("click", handlePanelClick)
  }

  showPanel(allPanelElements[0])
}

initAccordion(document.querySelector(".accordion"))
}
