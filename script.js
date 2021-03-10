var i;
const ol = document.body.querySelector('ol');
    
    for (i = 1; i<=11; i++) {
        let li = document.createElement('li');
        li.textContent = `Seweryn ${i}`;
        if (i % 2 === 0) {
            li.style.background="red";
            ol.appendChild(li);
        }
        else
        {
            ol.appendChild(li);
        }

    }
    