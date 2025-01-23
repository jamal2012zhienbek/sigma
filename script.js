function StartGame() { 
    sec = 30 
    MyPoints = 0 
    MyDivPoints.innerText = MyPoints
    let MyArrey =[ 
    "Atyray", 
    "Arys", 
    "Aktobe", 
    "Astana", 
    "Aktay", 
    "Almaty" 
] 
    MyArrey = [...MyArrey, ...MyArrey] 
    MyArrey.sort(()=> Math.random() - 0.5) 
    let MDiv = document.getElementById("GameBoard") 
    MDiv.innerText = "" 
    MyArrey.forEach(element => { 
    let cell = document.createElement("div") 
    MDiv.appendChild(cell) 
    cell.innerText = element 
    cell.classList.add("cell", "cellHide") 
    cell.addEventListener("click", ()=>{ 
        Validate(cell) 
    }) 
}) 
} 
 
 
let FirsWord = null 
let MyPoints = 0 
let MyDivPoints = document.getElementById("points") 
 
function Validate(cell) { 
cell.classList.remove("cellHide") 
cell.classList.add("cellShown")     
 
if (!FirsWord) { 
    setTimeout(()=> { 
    FirsWord=cell 
}, 300) 
 
}else if (FirsWord.innerText == cell.innerText  
    && FirsWord !== cell) { 
    setTimeout(()=>{ 
    FirsWord.style.visibility = "Hidden" 
    cell.style.visibility = "Hidden" 
    FirsWord = null 
    MyPoints += 1 
    MyDivPoints.innerText = MyPoints 
    }, 300 ) 
 
}else { 
    setTimeout(()=> { 
     cell.classList.remove("cellShown") 
     cell.classList.add("cellHide")    
     FirsWord.classList.remove("cellShown") 
     FirsWord.classList.add("cellHide") 
     FirsWord = null 
    }, 300) 
 
 
}} 
 
let TimerP = document.getElementById("timer") 
let sec = 30 
setInterval(()=>{ 
    TimerP.innerText = sec 
    sec-- 
    if (sec == 0){ 
    sec = 30 
    StartGame() 
 
} 
}, 1000) 
 
window.onload = StartGame
