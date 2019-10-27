let inpname = document.getElementById('name');
let inpmobile = document.getElementById('mobile');
let inpemail = document.getElementById('email');
let btnadd = document.getElementById('addcontact');
let tbl = document.getElementById('tablecontact');
let notfound = document.getElementById('notfound');

btnadd.onclick = function(){
  addContactNOW();
};

function addContactNOW(){
  var valname = inpname.value;
  var valmobile = inpmobile.value;
  var valemail = inpemail.value;
  var ptrnname = /^[a-zA-Z]+$/;
  var ptrnmobile = /^\d+$/;
  var ptremail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(valname != '' && valmobile != '' && valemail != ''){

    if(valname.match(ptrnname) && valmobile.match(ptrnmobile) && valemail.match(ptremail)){
      tablecontact.appendChild(createRow(valname, valmobile, valemail));
      inpname.value = '';
      inpmobile.value = '';
      inpemail.value = '';
    }else{
      alert("Check your input again, Only Alphabet in Name, Number in Mobile");
    }

  }else{
    alert("Check your input again!");
  }

}
function createRow(name, mobile, email){
  row = document.createElement("TR");
  tdname = document.createElement("TD"); tdname.appendChild(document.createTextNode(name));
  tdmobile = document.createElement("TD"); tdmobile.appendChild(document.createTextNode(mobile));
  tdemail = document.createElement("TD"); tdemail.appendChild(document.createTextNode(email));

  row.appendChild(tdname);
  row.appendChild(tdmobile);
  row.appendChild(tdemail);

  return row;
}

function searchMobile(){

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inpsearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("contact");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        notfound.style.display = "none";
      } else {
        tr[i].style.display = "none";
        notfound.style.display = "block";
      }
    }
  }
}
