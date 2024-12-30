// Show the popup when the page loads
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
}

// Close the popup when the button is clicked
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
