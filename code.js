let mode="dark";

window.addEventListener("load", () => {
    loadElements();
});

const loadElements = () => {
    document.getElementById("collegeLogo").addEventListener("click", func = () => {
        document.getElementById("popUpDiv").style.display="block";
        document.getElementById("Xbtn").addEventListener("click", func = () => {
            document.getElementById("popUpDiv").style.display="none";
        });
    });
}
