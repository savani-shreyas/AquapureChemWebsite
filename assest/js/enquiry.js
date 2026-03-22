document.getElementById("myForm").addEventListener("submit", function () {
    submitted = true;
});

function formSubmitted() {
    if (submitted) {
        alert("Thank you! Your response has been submitted.");
        document.getElementById("myForm").reset();
        submitted = false;
    }
}