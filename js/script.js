let elForm = document.querySelector(".form");
let elFormInputName = document.querySelector(".form__input-name");
let elFormInputRelationship = document.querySelector(
  ".form__input-relationship"
);
let elFormInputPhone = document.querySelector(".form__input-phone");
let elContacts = document.querySelector(".listGroup");

let contacts = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValueName = elFormInputName.value;
  let inputValueRelationship = elFormInputRelationship.value;
  let inputValuePhone = elFormInputPhone.value;

  let contact = {
    name: inputValueName,
    relationship: inputValueRelationship,
    phone: inputValuePhone,
  };

  contacts.push(contact);

  elFormInputName.value = null;
  elFormInputRelationship.value = null;
  elFormInputPhone.value = null;
  elContacts.innerHTML = null;

  for (let i = 0; i < contacts.length; i++) {
    // CREATE ELEMENT
    let newItem = document.createElement("li");
    let newName = document.createElement("p");
    let newRelationship = document.createElement("p");
    let newPhone = document.createElement("p");

    //SET ATRIBUT

    //APPNEDCHILD
    elContacts.appendChild(newItem);
    newItem.appendChild(newName);
    newItem.appendChild(newRelationship);
    newItem.appendChild(newPhone);

    //textContent
    newName.textContent = contacts[i].name;
    newRelationship.textContent = contacts[i].relationship;
    newPhone.textContent = `+998${contacts[i].phone}`;
  }
});
