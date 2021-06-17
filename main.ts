enum Role{
    Subscriber,
    Admin,
    SuperAdmin
}
const myData:object= [
    {
        First_Name:"Mr.",
        Middle_Name:"Faizan",
        Last_Name:"Alam",
        Email:"faizan1620@gmail.com",
        Phone_Number:9955171847,
        Role:Role[0],
        Address:"supaul"
        
    },

    {
        First_Name:"Miss",
        Middle_Name:"Megha",
        Last_Name:"Agarwal",
        Email:"meghaa@gmail.com",
        Phone_Number:999999999,
        Role:Role[1],
        Address:"bihar"
        
    },

    {
        First_Name:"Mr.",
        Middle_Name:"Sharique",
        Last_Name:"Khan",
        Email:"sharique@gmail.com",
        Phone_Number:62101725232,
        Role:Role[0],
        Address:"Kishanganj"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Sachin",
        Last_Name:"Kumar",
        Email:"sachin@gmail.com",
        Phone_Number:990000047,
        Role:Role[2],
        Address:"Patna"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Akshay",
        Last_Name:"Kumar",
        Email:"akshay@gmail.com",
        Phone_Number:88890171847,
        Role:Role[1],
        Address:"Punjab"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Alok",
        Last_Name:"Kumar",
        Email:"alok@gmail.com",
        Phone_Number:880901847,
        Role:Role[0],
        Address:"Hariyana"

    },

    {
        First_Name:"Mr.",
        Middle_Name:"Ankit",
        Last_Name:"Kumar",
        Email:"ankit@gmail.com",
        Phone_Number:9900171847,
        Role:Role[2],
        Address:"New Delhi"

    },

    {
        First_Name:"Md.",
        Middle_Name:"Danish",
        Last_Name:"Raza",
        Email:"danish@gmail.com",
        Phone_Number:748862847,
        Role:Role[1],
        Address:"Bihar"

    }
];




interface crud<T>{
     createData<T>();
     readData<T>();
     updateData<T>(tr:any);
     deleteData<T>(td:any);
}


class Model<T,U> {
        First_Name:T;
        Middle_Name:T;
        Last_Name:T;
        Email:T;
        Phone_Number:U;
        Role:Role;
        Address:T;

}


class MyClass extends Model<string,number> implements crud<void>{

//Methods implemented from the interface


    @FormatDate    //Decorator here...
    createData<T>() {
        var addR:any=document.getElementById("list") as HTMLTableElement;
        var newR=addR.insertRow();
        var newC:any;
        for(var val in myData[0])
           newC=newR.insertCell();
        const btns=document.createElement('td');
        btns.innerHTML=` <button id="onEditing" onClick="new MyClass.updateData(this)">Edit</button> <button id="onDeleting"
         onClick="new MyClass().deleteData(this)">Delete</button> `;
        newR.appendChild(btns);
        this.updateData(btns.firstChild);

    }


    readData<T>(){
        document.getElementById("firstButton").innerHTML="Refresh Data";
        var text=`<div class="tabledata"><table align="center" id="list"><tr>`;

        for(var key in myData[0]){
             text+=`<th>${key}</th>`;
        }

        text+="<th></th></tr>";
        var value="<tr>";
        
        for(var i in Object.keys(myData)){

                this.First_Name=myData[i]["First_Name"];
                this.Middle_Name=myData[i]["Middle_Name"];
                this.Last_Name=myData[i]["Last_Name"];
                this.Email=myData[i]["Email"];
                this.Phone_Number=myData[i]["Phone_Number"];
                this.Role=myData[i]["Role"];
                this.Address=myData[i]["Address"];
                
                value+=`<td>${this.First_Name}</td>`;
                value+=`<td>${this.Middle_Name}</td>`;
                value+=`<td>${this.Last_Name}</td>`;
                value+=`<td>${this.Email}</td>`;
                value+=`<td>${this.Phone_Number}</td>`;
                value+=`<td>${this.Role}</td>`;
                value+=`<td>${this.Address}</td>`;

            value+=`<td id="button1"> <button id="onEditing" onClick="new MyClass().updateData(this)">Edit</button>
             <button id="onDeleting"
                onClick="new MyClass().deleteData(this)">Delete</button> </td>`;
                value+="</tr>";
        }


   
        document.getElementById("page").innerHTML=` ${text} ${value}
 
        </table>    </div>
        `;
    }

    updateData<T>(tr:any){

        var row:any=tr.parentElement.parentElement; 
        row.setAttribute('contenteditable',true);
        row.children[Object.keys(myData[0]).length].setAttribute('contenteditable',false);
        var tds:any=tr.parentElement.remove();
        if(!this.inEditing(row)){
        row.className='in-editing';
        row.setAttribute('old-data',row.innerHTML);
        this.createButton(row);
    }

    }

     deleteData<T>(td:any){
             if(confirm("Are you sure to delete this record ?")){
                 var row:any=td.parentElement.parentElement;
                 var tab=document.getElementById("list") as HTMLTableElement;
                 tab.deleteRow(row.rowIndex);
                
             }

     }


// Now extra features defined apart from implemented features

   inEditing<T>(row:any){
        return row.classList.contains(`in-editing`);
    }

    createButton<T>(row:any){
        const buttons:any=document.createElement('td');
        buttons.className="button-toolbar";
        buttons.innerHTML= ` <button class="save-button">Save</button>  <button class="cancel-button">Cancel</button>  `;
        row.appendChild(buttons);
        buttons.setAttribute('contenteditable',false);
    
    
        const btnsave=buttons.querySelector('.save-button');
        const btncancel=buttons.querySelector('.cancel-button');
        btnsave.addEventListener('click',(ev:any)=>{
            ev.stopPropagation();
            this.save(row);
        });
    
        btncancel.addEventListener('click',(ev:any)=>{
            ev.stopPropagation();
            this.cancel(row);
        });
    }

    save<T>(row:any){
        row.classList.remove('in-editing');
        this.removeButtons(row);
        row.setAttribute('contenteditable',false);
    }

    removeButtons<T>(row:any){
        const btn=row.querySelector('.button-toolbar');
        btn.remove();
    
        const btns=document.createElement('td');
        btns.innerHTML=` <button id="onEditing" onClick="new MyClass().updateData(this)">Edit</button> <button id="onDeleting"
        onClick="new MyClass().deleteData(this)">Delete</button> `;
        row.appendChild(btns);
    }

    cancel<T>(row:any){
        row.innerHTML=row.getAttribute('old-data');
        row.classList.remove('in-editing');
    
        const btns=document.createElement('td');
        btns.innerHTML=` <button id="onEditing" onClick="new MyClass().updateData(this)">Edit</button> <button id="onDeleting"
        onClick="new MyClass().deleteData(this)">Delete</button> `;
        row.appendChild(btns);
        row.setAttribute('contenteditable',false);
    }


    
        
    
       
}

//  :::: Decorator Factory ::::

function FormatDate(target:any,name:string,descriptor:PropertyDescriptor){
     const dtm=document.getElementById("datetime") as HTMLInputElement;
     setInterval(function() {
        dtm.innerHTML=new Date().toLocaleString();
    }, 1000);

}




function main<T>(){
    var obj=new MyClass();
    obj.readData();
    document.getElementById("addData").style.display="Block";
   
}