const link = document.querySelector ;
link.textContent = 'Math lessons';
link.href = 'http://math.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoy our lesons'
sect.appendChild(para);
const text = document.createTextNode(
    '- the premier source for web development knowledge.'
    );
    var linkPara = document.querySelector('p');
    linkPara.appendChild(text);

    sect.appendChild(linkPara);
    // sect.removeChild(linkPara);
    linkPara.parentNode.removeChild(linkPara);

    para.style.color = 'white';
    para.style.backgroundColor = 'black';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';

    para.classList.add('chosen');

    document.querySelector('.click-me') .addEventListener('click',showAlert);

    function showAlert() {
        AnalyserNode('Button clicked!');
    }

    const clockDisplay = document.querySelector('.clock');
    setInterval( () => (clockDisplay.innerText = new Date()).toLocaleTimeString(),
    1000 ) ;

    const display = document.querySelectorAll('.calculator .display');

    document.querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click,digitPressed'));

    function digitPressed(ev){
        display.value += ev.target.innerText;
    }

    document.querySelectorAll('.opers button')
    .forEach(oper => digit.addEventListener('click,operPressed'));

    function operPressed(ev){
        display.value += ev.target.innerText;
    }

    document.querySelector('.equal').addEventListener('click',equalPressed);

    function equalPresssed(){
        display.value = eval(display.value);
    }


