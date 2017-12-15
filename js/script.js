const panels = document.querySelectorAll(".singlePanel");

function openPanel() {
    this.classList.toggle('open');
}


function activePanel(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}


panels.forEach(singlePanel => singlePanel.addEventListener('click', openPanel));
/*open panel after click on it*/

panels.forEach(singlePanel => singlePanel.addEventListener('transitionend', activePanel));
/*apper the top and bottom text after "open animation" (when it is done)*/
