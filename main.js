let btn = document.querySelector("#btn");
let err = document.querySelector("form #err");


btn.onclick = (e) => {
    err.style.display = "block";
    setTimeout(() => {
        err.innerHTML = `أدخل الرمز مرة أخرى الآن`;
    }, 3000);
}
