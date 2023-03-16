window.addEventListener('load', solution);

function solution() {

  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');

  const infoPreview = document.getElementById('infoPreview');
  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', getInfo);
  const editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', onEdit);
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const title = document.createElement('h3');

  continueBtn.addEventListener('click', () => {
    title.textContent = 'Thank you for your reservation!';
    block.innerHTML = '';
    block.appendChild(title);
  });

  function getInfo() {

    if (fname.value === '' || email.value === '') {
      return;
    }

    const liName = document.createElement('li');
    liName.textContent = `Full Name: ${fname.value}`;

    const liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${email.value}`;

    const liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phone.value}`;

    const liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${address.value}`;

    const liCode = document.createElement('li');
    liCode.textContent = `Postal Code: ${code.value}`;

    infoPreview.appendChild(liName);
    infoPreview.appendChild(liEmail);
    infoPreview.appendChild(liPhone);
    infoPreview.appendChild(liAddress);
    infoPreview.appendChild(liCode);

    fname.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';

    continueBtn.disabled = false;
    editBtn.disabled = false;
    submitBtn.disabled = true;

  }
  function onEdit() {

    const [fullName, selfEmail, selfPhone, streetAddress, postCode] = infoPreview.childNodes;
    fname.value = fullName.textContent.split(': ')[1];
    email.value = selfEmail.textContent.split(': ')[1];
    phone.value = selfPhone.textContent.split(': ')[1];
    address.value = streetAddress.textContent.split(': ')[1];
    code.value = postCode.textContent.split(': ')[1];

    infoPreview.innerHTML = '';

    continueBtn.disabled = true;
    editBtn.disabled = true;
    submitBtn.disabled = false;

  }

}

