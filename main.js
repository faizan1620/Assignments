var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Role;
(function (Role) {
    Role[Role["Subscriber"] = 0] = "Subscriber";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var myData = [
    {
        First_Name: "Mr.",
        Middle_Name: "Faizan",
        Last_Name: "Alam",
        Email: "faizan1620@gmail.com",
        Phone_Number: 9955171847,
        Role: Role[0],
        Address: "supaul"
    },
    {
        First_Name: "Miss",
        Middle_Name: "Megha",
        Last_Name: "Agarwal",
        Email: "meghaa@gmail.com",
        Phone_Number: 999999999,
        Role: Role[1],
        Address: "bihar"
    },
    {
        First_Name: "Mr.",
        Middle_Name: "Sharique",
        Last_Name: "Khan",
        Email: "sharique@gmail.com",
        Phone_Number: 62101725232,
        Role: Role[0],
        Address: "Kishanganj"
    },
    {
        First_Name: "Mr.",
        Middle_Name: "Sachin",
        Last_Name: "Kumar",
        Email: "sachin@gmail.com",
        Phone_Number: 990000047,
        Role: Role[2],
        Address: "Patna"
    },
    {
        First_Name: "Mr.",
        Middle_Name: "Akshay",
        Last_Name: "Kumar",
        Email: "akshay@gmail.com",
        Phone_Number: 88890171847,
        Role: Role[1],
        Address: "Punjab"
    },
    {
        First_Name: "Mr.",
        Middle_Name: "Alok",
        Last_Name: "Kumar",
        Email: "alok@gmail.com",
        Phone_Number: 880901847,
        Role: Role[0],
        Address: "Hariyana"
    },
    {
        First_Name: "Mr.",
        Middle_Name: "Ankit",
        Last_Name: "Kumar",
        Email: "ankit@gmail.com",
        Phone_Number: 9900171847,
        Role: Role[2],
        Address: "New Delhi"
    },
    {
        First_Name: "Md.",
        Middle_Name: "Danish",
        Last_Name: "Raza",
        Email: "danish@gmail.com",
        Phone_Number: 748862847,
        Role: Role[1],
        Address: "Bihar"
    }
];
var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods implemented from the interface
    MyClass.prototype.createData = function () {
        var addR = document.getElementById("list");
        var newR = addR.insertRow();
        var newC;
        for (var val in myData[0])
            newC = newR.insertCell();
        var btns = document.createElement('td');
        btns.innerHTML = " <button id=\"onEditing\" onClick=\"new MyClass.updateData(this)\">Edit</button> <button id=\"onDeleting\"\n         onClick=\"new MyClass().deleteData(this)\">Delete</button> ";
        newR.appendChild(btns);
        this.updateData(btns.firstChild);
    };
    MyClass.prototype.readData = function () {
        document.getElementById("firstButton").innerHTML = "Refresh Data";
        var text = "<div class=\"tabledata\"><table align=\"center\" id=\"list\"><tr>";
        for (var key in myData[0]) {
            text += "<th>" + key + "</th>";
        }
        text += "<th></th></tr>";
        var value = "<tr>";
        for (var i in Object.keys(myData)) {
            this.First_Name = myData[i]["First_Name"];
            this.Middle_Name = myData[i]["Middle_Name"];
            this.Last_Name = myData[i]["Last_Name"];
            this.Email = myData[i]["Email"];
            this.Phone_Number = myData[i]["Phone_Number"];
            this.Role = myData[i]["Role"];
            this.Address = myData[i]["Address"];
            value += "<td>" + this.First_Name + "</td>";
            value += "<td>" + this.Middle_Name + "</td>";
            value += "<td>" + this.Last_Name + "</td>";
            value += "<td>" + this.Email + "</td>";
            value += "<td>" + this.Phone_Number + "</td>";
            value += "<td>" + this.Role + "</td>";
            value += "<td>" + this.Address + "</td>";
            value += "<td id=\"button1\"> <button id=\"onEditing\" onClick=\"new MyClass().updateData(this)\">Edit</button>\n             <button id=\"onDeleting\"\n                onClick=\"new MyClass().deleteData(this)\">Delete</button> </td>";
            value += "</tr>";
        }
        document.getElementById("page").innerHTML = " " + text + " " + value + "\n \n        </table>    </div>\n        ";
    };
    MyClass.prototype.updateData = function (tr) {
        var row = tr.parentElement.parentElement;
        row.setAttribute('contenteditable', true);
        row.children[Object.keys(myData[0]).length].setAttribute('contenteditable', false);
        var tds = tr.parentElement.remove();
        if (!this.inEditing(row)) {
            row.className = 'in-editing';
            row.setAttribute('old-data', row.innerHTML);
            this.createButton(row);
        }
    };
    MyClass.prototype.deleteData = function (td) {
        if (confirm("Are you sure to delete this record ?")) {
            var row = td.parentElement.parentElement;
            var tab = document.getElementById("list");
            tab.deleteRow(row.rowIndex);
        }
    };
    // Now extra features defined apart from implemented features
    MyClass.prototype.inEditing = function (row) {
        return row.classList.contains("in-editing");
    };
    MyClass.prototype.createButton = function (row) {
        var _this = this;
        var buttons = document.createElement('td');
        buttons.className = "button-toolbar";
        buttons.innerHTML = " <button class=\"save-button\">Save</button>  <button class=\"cancel-button\">Cancel</button>  ";
        row.appendChild(buttons);
        buttons.setAttribute('contenteditable', false);
        var btnsave = buttons.querySelector('.save-button');
        var btncancel = buttons.querySelector('.cancel-button');
        btnsave.addEventListener('click', function (ev) {
            ev.stopPropagation();
            _this.save(row);
        });
        btncancel.addEventListener('click', function (ev) {
            ev.stopPropagation();
            _this.cancel(row);
        });
    };
    MyClass.prototype.save = function (row) {
        row.classList.remove('in-editing');
        this.removeButtons(row);
        row.setAttribute('contenteditable', false);
    };
    MyClass.prototype.removeButtons = function (row) {
        var btn = row.querySelector('.button-toolbar');
        btn.remove();
        var btns = document.createElement('td');
        btns.innerHTML = " <button id=\"onEditing\" onClick=\"new MyClass().updateData(this)\">Edit</button> <button id=\"onDeleting\"\n        onClick=\"new MyClass().deleteData(this)\">Delete</button> ";
        row.appendChild(btns);
    };
    MyClass.prototype.cancel = function (row) {
        row.innerHTML = row.getAttribute('old-data');
        row.classList.remove('in-editing');
        var btns = document.createElement('td');
        btns.innerHTML = " <button id=\"onEditing\" onClick=\"new MyClass().updateData(this)\">Edit</button> <button id=\"onDeleting\"\n        onClick=\"new MyClass().deleteData(this)\">Delete</button> ";
        row.appendChild(btns);
        row.setAttribute('contenteditable', false);
    };
    __decorate([
        FormatDate //Decorator here...
    ], MyClass.prototype, "createData");
    return MyClass;
}(Model));
//  :::: Decorator Factory ::::
function FormatDate(target, name, descriptor) {
    var dtm = document.getElementById("datetime");
    setInterval(function () {
        dtm.innerHTML = new Date().toLocaleString();
    }, 1000);
}
function main() {
    var obj = new MyClass();
    obj.readData();
    document.getElementById("addData").style.display = "Block";
}
