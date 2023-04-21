let num = document.getElementById("num");
let generatedList = document.getElementById("genList");
let list = document.getElementById("list");
let currList = [];
let genlist = [];

function generate() {

    for (let i = 0; i < num.value; i++) {
        let value = Math.floor(Math.random() * 100);
        let index = i;
        currList.push({ index, value });
        genlist.push(value);
    }
    generatedList.style.fontSize = "20px";
    generatedList.innerText = genlist;

    currList.forEach(ele => {
        let newdiv = document.createElement('div');
        newdiv.innerText = ele.value;
        newdiv.className = "ele";
        newdiv.id = ele.index;
        list.appendChild(newdiv);

    })

}


function sort() {

    let checkerID = null;

    checkerID = setInterval(check, 2000)

    let i = 0;
    let k = 0;
    function check() {
        if (i === currList.length - 1) {
            clearInterval(checkerID);
        }
        else {
            let min = 111;
            let minindex = 0;
            for (let j = i + 1; j < currList.length; j++) {
                if (currList[j].value < min) {
                    min = currList[j].value;
                    minindex = j;
                }
            }
            console.log(currList[minindex].value);

            if (currList[i].value > currList[minindex].value) {
                let eleA = document.getElementById(i);
                let eleB = document.getElementById(minindex);

                eleA.innerText = currList[minindex].value;
                eleB.innerText = currList[i].value;

                let temp = currList[i].value;
                currList[i].value = currList[minindex].value;
                currList[minindex].value = temp;

                eleA.style.backgroundColor = "blue";
                eleB.style.backgroundColor = "black";
            }
            i++;
        }

    }

}