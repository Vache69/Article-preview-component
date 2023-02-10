const shareBtn = document.getElementById("share-btn");
const afterClickDiv = document.querySelector(".after-click");

shareBtn.addEventListener("click", () => {
    afterClickDiv.classList.remove("hidden");  
})