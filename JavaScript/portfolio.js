// These functions open and close the contact form
function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}
document.addEventListener("click", function(event){
    //Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element withthe contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )