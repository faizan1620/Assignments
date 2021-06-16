//JSON data

const myData = [
    {
        First_Name:"Mr.",
        Middle_Name:"Faizan",
        Last_Name:"Alam",
        Email:"faizan1620@gmail.com",
        Phone_Number:"9955171847",
        Role:"trainee",
        Address:"supaul"
        
    },

    {
        First_Name:"Miss",
        Middle_Name:"Megha",
        Last_Name:"Agarwal",
        Email:"meghaa@gmail.com",
        Phone_Number:"999999999",
        Role:"student",
        Address:"bihar"
        
    },

    {
        First_Name:"Mr.",
        Middle_Name:"Sharique",
        Last_Name:"Khan",
        Email:"sharique@gmail.com",
        Phone_Number:"62101725232",
        Role:"Student",
        Address:"Kishanganj"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Sachin",
        Last_Name:"Kumar",
        Email:"sachin@gmail.com",
        Phone_Number:"990000047",
        Role:"trainee",
        Address:"Patna"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Akshay",
        Last_Name:"Kumar",
        Email:"akshay@gmail.com",
        Phone_Number:"88890171847",
        Role:"Student",
        Address:"Punjab"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Alok",
        Last_Name:"Kumar",
        Email:"alok@gmail.com",
        Phone_Number:"880901847",
        Role:"Developer",
        Address:"Hariyana"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Ankit",
        Last_Name:"Kumar",
        Email:"ankit@gmail.com",
        Phone_Number:"9900171847",
        Role:"Student",
        Address:"New Delhi"

    },

    {
        First_Name:"Md.",
        Middle_Name:"Danish",
        Last_Name:"Raza",
        Email:"danish@gmail.com",
        Phone_Number:"748862847",
        Role:"Student",
        Address:"Bihar"

    }
];



function loadData(){
   document.getElementById("firstButton").innerHTML="Refresh Data";
   var text=`<div class="tabledata"><table align="center" id="list"><tr>`;
   for(var key in myData[0]){
       text+=`<th>${key}</th>`;
   }
   text+="<th></th></tr>";

   var value="<tr>";
for(var i in Object.keys(myData)){

   for(var val in myData[0]){
        value+=`<td>${myData[i][val]}</td>`;
   }
   value+=`<td id="button1"> <button id="onEditing" onClick="onEdit(this)">Edit</button> <button id="onDeleting"
   onClick="onDelete(this)">Delete</button> </td>`;
   value+="</tr>";
}


   
   document.getElementById("page").innerHTML=`<h1 class="heading">Employee Data (Total ${myData.length})</h1> ${text} ${value}
 
   </table>  </div>
 `;
 
}



function onEdit(tr){
    row=tr.parentElement.parentElement; 
    row.setAttribute('contenteditable',true);
    
    



    row.children[Object.keys(myData[0]).length].setAttribute('contenteditable',false);
    
    tds=tr.parentElement.remove();


    if(!this.inEditing(row)){
    row.className='in-editing';
    row.setAttribute('old-data',row.innerHTML);
    createButton(row);
    }
    
}

function inEditing(row){
    return row.classList.contains(`in-editing`);
}

function createButton(row){
    const buttons=document.createElement('td');
    buttons.className="button-toolbar";
    buttons.innerHTML= ` <button class="save-button">Save</button>  <button class="cancel-button">Cancel</button>  `;
    row.appendChild(buttons);
    buttons.setAttribute('contenteditable',false);


    const btnsave=buttons.querySelector('.save-button');
    const btncancel=buttons.querySelector('.cancel-button');
    btnsave.addEventListener('click',(ev)=>{
        ev.stopPropagation();
        this.save(row);
    });

    btncancel.addEventListener('click',(ev)=>{
        ev.stopPropagation();
        this.cancel(row);
    });
}

function cancel(row){
    row.innerHTML=row.getAttribute('old-data');
    row.classList.remove('in-editing');

    const btns=document.createElement('td');
    btns.innerHTML=` <button id="onEditing" onClick="onEdit(this)">Edit</button> <button id="onDeleting"
    onClick="onDelete(this)">Delete</button> `;
    row.appendChild(btns);
    row.setAttribute('contenteditable',false);
}

function save(row){
    row.classList.remove('in-editing');
    this.removeButtons(row);
    row.setAttribute('contenteditable',false);
    

    
}


function removeButtons(row){
    const btn=row.querySelector('.button-toolbar');
    btn.remove();

    const btns=document.createElement('td');
    btns.innerHTML=` <button id="onEditing" onClick="onEdit(this)">Edit</button> <button id="onDeleting"
    onClick="onDelete(this)">Delete</button> `;
    row.appendChild(btns);
}
function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
        row=td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetform();
    }
}





