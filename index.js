let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
//both console is showing that in js variable we succesfully store above html tags.
console.log(saveEl);
console.log(countEl);

let count=0;

function increment(){
   //this log is for confirmation for our button is working or not.
    console.log("button clicked !");
    count +=1;
    countEl.textContent = count;
}

function save(){
    let countstr = count + " - ";
    saveEl.textContent += countstr ;
   countEl.textContent = 0;
    count = 0;

}
