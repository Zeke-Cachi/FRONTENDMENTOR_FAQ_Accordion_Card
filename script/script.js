//RETRIEVING VARIABLES
let arrow = document.getElementById('questionArrow');
let appendable = document.getElementById('appendable');
let h6 = document.getElementById('clickedH6');
let appearDissappear = true;
let dropdownP;

//CREATING THE DROPDOWN ANSWER AND STYLING
let toggleDropdown = () => {
    if (appearDissappear == true) {
        dropdownP = document.createElement('p');
        dropdownP.textContent = 'No more than 2GB. All files in your account must fit your alloted storage space';
        dropdownP.classList.add('question-title', 'dropdown-styling');
        appendable.appendChild(dropdownP);
        arrow.style.transform = 'rotate(180deg)';
        h6.style.opacity = '1';
        appearDissappear = false;
    } else {
        dropdownP.remove();
        arrow.style.transform = 'rotate(0deg)';
        h6.style.opacity = '.5';
        appearDissappear = true;
    }
};

//EVENT LISTENERS FOR THE ARROW AND THE QUESTION ITSELF
arrow.addEventListener('click', toggleDropdown);
h6.addEventListener('click', toggleDropdown);



