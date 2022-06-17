

const myArray = ["shlomo", "hailo", "hello", "world"];
myArray.forEach((item) => { console.log(item.toUpperCase()) });


let myobject = {
    age: 20,
    firstName: "shlomo",
    lastName: "hailo"
}

let myobject2 = {
    age: 20,
    firstName: "sara",
    lastName: "likauont"
}
const arrayObject = [myobject2, myobject]


function getElemnte(useer) {

    useer.forEach((argoment) => {

        if (argoment.age > 18) {
            printObject.innerHTML += " " + argoment.firstName;
        }
        else {
            printObject.innerHTML += " " + argoment.lastName;
        }

    })

}
getElemnte(arrayObject)


for (const iterator of myArray) {
    console.log(iterator.toUpperCase());
}



let elmntea = document.getElementsByClassName('pClass');

for (const iterator of elmntea) {
    console.log(iterator);


}

function changecolor() {
    for (const iterator of elmntea) {
        iterator.style.color = "blue";
    }
}

function chngeText() {
    for (const iterator of elmntea) {
        iterator.innerHTML = "hello";
    }
}


const newObject = {
    firstName: "shlomo",
    lastName: "hailo",
    city: "kriat malachi",
    age: 29
}


function printObjectvalue() {
    for (let key in newObject) {
        my_h1.innerHTML += ` <div>${key}: ${newObject[key]}</div>`;
    }
}
printObjectvalue()






function createObject() {
    let username = document.getElementById('firsname').value;
    let userlast = document.getElementById('lastname').value;
    let userage = document.getElementById('age').value;

    const userobject = {};

    userobject.fName = username;
    userobject.lName = userlast;
    userobject.Age = userage;

    for (let key in userobject) {
        my_h1.innerHTML += ` <div>${key}: ${userobject[key]}</div>`;
    }


}