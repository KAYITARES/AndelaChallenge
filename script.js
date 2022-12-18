let selectedRow = null;
let btnTransaction = document.querySelector(".btn-transaction");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeModal = document.querySelector(".close-modal");


function onFormSubmit(e) {
  event.preventDefault();

  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    saveUpdate(formData);
  }
  reset();
}
function readFormData() {
  let formData = {};
  formData["date"] = document.getElementById("date").value;
  formData["amount"] = document.getElementById("amount").value;
  formData["receiverName"] = document.getElementById("receiverName").value;
  formData["receiverPhoneNumber"] = document.getElementById(
    "receiverPhoneNumber"
  ).value;
  formData["senderName"] = document.getElementById("senderName").value;
  formData["senderPhoneNumber"] =
    document.getElementById("senderPhoneNumber").value;
  formData["stats"] = document.querySelector(
    'input[name="stats"]:checked'
  ).value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .querySelector("#myTable")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  date = newRow.insertCell(0);
  date.innerHTML = data.date;
  amount = newRow.insertCell(1);
  amount.innerHTML = data.amount;
  receiverName = newRow.insertCell(2);
  receiverName.innerHTML = data.receiverName;
  receiverPhoneNumber = newRow.insertCell(3);
  receiverPhoneNumber.innerHTML = data.receiverPhoneNumber;
  senderName = newRow.insertCell(4);
  senderName.innerHTML = data.senderName;
  senderPhoneNumber = newRow.insertCell(5);
  senderPhoneNumber.innerHTML = data.senderPhoneNumber;
  stats = newRow.insertCell(6);
  stats.innerHTML = data.stats;
  balance = newRow.insertCell(7);
  balance.innerHTML = `-`;
  action = newRow.insertCell(8);
  action.innerHTML = `<a style="color:green;text-decoration:none" href="#" onClick="update(this)">Update</a>`;
  action2 = newRow.insertCell(9);
  action2.innerHTML = `<a style="color:red;text-decoration:none" href="#" onClick=" deleteTransaction(this)">Delete</a>`;

}

btnTransaction.addEventListener("click", () => {
  //open modal
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModal.addEventListener("click", () => {
  //close modal
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

//uupdate
function update(updat) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  selectedRow = updat.parentElement.parentElement;
  document.getElementById("date").value = selectedRow.cells[0].innerHTML;
  document.getElementById("amount").value = selectedRow.cells[1].innerHTML;
  document.getElementById("receiverName").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("receiverPhoneNumber").value =
    selectedRow.cells[3].innerHTML;
  document.getElementById("senderName").value =
    selectedRow.cells[4].innerHTML;
  document.getElementById("senderPhoneNumber").value =
    selectedRow.cells[5].innerHTML;
  document.querySelector('input[name="stats"]:checked').value =
    selectedRow.cells[6].innerHTML;
}
//function saveUpdate
function saveUpdate(dataForm) {
  selectedRow.cells[0].innerHTML = dataForm.date;
  selectedRow.cells[1].innerHTML = dataForm.amount;
  selectedRow.cells[2].innerHTML = dataForm.receiverName;
  selectedRow.cells[3].innerHTML = dataForm.receiverPhoneNumber;
  selectedRow.cells[4].innerHTML = dataForm.senderName;
  selectedRow.cells[5].innerHTML = dataForm.senderPhoneNumber;
  selectedRow.cells[6].innerHTML = dataForm.stats;
}
//delete data
function deleteTransaction(dataForm) {
  if (confirm(`do you want to delete the transaction record?`)) {
    row = dataForm.parentElement.parentElement;
    document.getElementById("myTable").deleteRow(row.rowIndex);
    reset();
  }
}

//reset function
function reset() {
  document.getElementById("date").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("receiverName").value = "";
  document.getElementById("receiverPhoneNumber").value = "";
  document.getElementById("senderName").value = "";
  document.getElementById("senderPhoneNumber").value = "";
  document.querySelector('input[name="stats"]:checked').value = "";
  selectedRow = null;
}
