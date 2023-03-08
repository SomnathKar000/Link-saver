let myLeads = [];
const saveBtn = document.getElementById("saveBtn");
const input = document.getElementById("inputElement");
const ulTag = document.getElementById("ulTag");
const DeleteBtn = document.getElementById("deleteBtn");
const saveTab = document.getElementById("saveTab");
let getLeadsLocal = JSON.parse(localStorage.getItem("myLeads"));
if (getLeadsLocal) {
  myLeads = getLeadsLocal;
  renderValues();
}
function renderValues() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      `<li><a href="${myLeads[i]}" target="_blank">` + myLeads[i] + "</a></li>";
  }
  ulTag.innerHTML = listItems;
}

saveBtn.addEventListener("click", function saveInput() {
  myLeads.push(input.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderValues();
  input.value = "";
});

DeleteBtn.addEventListener("click", function deleteAll() {
  localStorage.clear();
  myLeads = [];
  renderValues();
});

saveTab.addEventListener("click", function Tab() {
  let val = "https://youtube.com/";
  myLeads.push(val);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderValues();
});
