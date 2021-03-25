
console.log("helllllllllo");

console.log("helllkkjljjlo");

const tab1 = document.querySelector('.infoBtn .btn1');
const tab2 = document.querySelector('.infoBtn .btn2');
const tab3 = document.querySelector('.infoBtn .btn3');
const tab1contect = document.getElementsByClassName('btn1content')[0];
const tab2contect = document.getElementsByClassName('btn2content')[0];
const tab3contect = document.getElementsByClassName('btn3content')[0];

tab2contect.style.display = 'none';
tab3contect.style.display = 'none';

tab1.addEventListener('click', function() {
    if (!tab2.style.border||!tab3.style.border) {
        tab2.style.border = "none";
        tab3.style.border = "none";
        tab1.style.borderBottom = "solid 2px red";
        tab1contect.style.display = '';
        tab2contect.style.display = 'none';
        tab3contect.style.display = 'none';
    }
});

tab2.addEventListener('click', function() {
    if (!tab1.style.border||!tab3.style.border) {
        tab1.style.border = "none";
        tab3.style.border = "none";
        tab2.style.borderBottom = "solid 2px red";
        tab1contect.style.display = 'none';
        tab2contect.style.display = '';
        tab3contect.style.display = 'none';
    }
});

tab3.addEventListener('click', function() {
    if (!tab1.style.border||!tab2.style.border) {
        tab1.style.border = "none";
        tab2.style.border = "none";
        tab3.style.borderBottom = "solid 2px red";
        tab1contect.style.display = 'none';
        tab2contect.style.display = 'none';
        tab3contect.style.display = '';
    }
});