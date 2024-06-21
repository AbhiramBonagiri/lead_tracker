let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul")
const deleteBtn = document.getElementById("delete-btn")

// let names = `["abhi","rohith","sainath","sohan"]`
// names = JSON.parse(names) -> string to array
// names.push("sahith")
// names = JSON.stringify(names) -> array to string
// console.log(names)

const leads = JSON.parse(localStorage.getItem("myLeads"))
if(leads){
    myLeads = leads
    render(myLeads)
}

function addUrl() {
    let url = inputEl.value.trim();
    if (url === "") {
        return; 
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        if (url.startsWith("www.")) {
            url = "http://" + url;
        } else {
            url = "http://" + url;
        }
    }
    myLeads.push(url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = "";
}

inputBtn.addEventListener("click", addUrl);

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addUrl();
    }
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li> <a target = '_blank' href = ' " + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i].trim()}'>${leads[i].trim()}</a>
            </li>`;
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}

// const recipient = "Abhi";
// const greeting = `Hello, this is ${recipient}!, How are you?`;
// console.log(greeting);

deleteBtn.addEventListener("click", function() {
    if (myLeads.length > 0) {
        myLeads.pop();
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
});

// let curr 
// console.log(curr) -> gives undefined as the output
// null -> how developer signalize emptiness
// undefined -> how JavaScript signalizes emotiness
// let curr = null
// console.log(curr) -> gives null as the output
// empty string is a falsy value
// console.log(Boolean("")) //-> false
// console.log(Boolean("0")) //-> true
// console.log(Boolean(100)) //-> true
// console.log(Boolean(null)) //-> false
// console.log(Boolean([0])) //-> true
// console.log(Boolean(-0)) //->false

// function greet(greeting,name){
//     const s = `${greeting} , ${name} `
//     console.log(s)
// }
// greet("Hello","Abhi")

// function add(num1,num2){
//     return num1 + num2
// }
// console.log(add(3,4))

// DOM Manipulation : 3 ways
// 