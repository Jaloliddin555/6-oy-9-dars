const student = JSON.parse(localStorage.getItem("user"));
const infosStudentBox = document.querySelector(".student__wrapper");

if (student) {
    infosStudentBox.innerHTML= 
    `
    <img src="./images/Student.png" >
    <h1>${student.name}</h2>
    <p>ID: ${student.surname}</h3>
    <p>Id: ${student.id}</p>
    <p>Gruppa: ${student.group}</p>
    <p>Coinlari : ${student.coins}</p>
    <p>Ustozi: ${student.password}</p>
    <p>Salomatlik : ${student.hp}</p>
    `
}



document.querySelector(".logout").addEventListener("click", ()=>{
    localStorage.removeItem("user");
    window.location.href = "./index.html"
})
student.shop
