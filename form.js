const form = document.getElementById('registrationForm');
const usersTableBody = document.getElementById('usersTableBody');
form.addEventListener('submit', function (event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const image = document.getElementById('image').files[0];
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const skills = document.getElementById('skills').value;
    const reader = new FileReader();
    reader.onload = function (){
        const imageSrc = reader.result;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
  <td>${name}</td>
  <td>${email}</td>
  <td>${phone}</td>
  <td><img src="${imageSrc}" alt="Profile Image" class="img-thumbnail"></td>
  <td>${age}</td>
  <td>${gender}</td>
  <td>${skills}</td>
`;
        usersTableBody.appendChild(newRow);
    };
    reader.readAsDataURL(image);
    form.reset();
});
