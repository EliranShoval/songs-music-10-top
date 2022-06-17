const canonical = document.createElement('link');
canonical.rel = 'canonical';
canonical.href = window.document.location.href;
document.head.append(canonical);

let section = document.querySelector('section');
section.classList.add('main-section-web');

let mainTitle = document.querySelector('h1');
mainTitle.innerText = 'Top 10 songs in 2022!';

let iamge = document.querySelector('img');
iamge.src = 'logoweb.png';

function addList(){
    let ulList = document.querySelector('ul');
    ulList.classList.add('ul-list');
    let button = document.querySelector('button');
    button.innerText = 'Show me!';

    button.addEventListener('click', () =>{
    ulList.style.border = '2px solid white';

    let list = document.createElement('li');
    list.innerHTML = ' <span>1#</span> Falling BackDrake';

    let list_2 = document.createElement('li');
    list_2.innerHTML = ' <span>2#</span> I Like You (A Happier Song) (with Doja Cat)Post Malone, Doja Cat';

    let list_3 = document.createElement('li');
    list_3.innerHTML = ' <span>3#</span> As It WasHarry Styles';

    let list_4 = document.createElement('li');
    list_4.innerHTML = ' <span>4#</span> Glimpse of UsJoji';

    let list_5 = document.createElement('li');
    list_5.innerHTML = ' <span>5#</span> About Damn TimeLizzo';

    let list_6 = document.createElement('li');
    list_6.innerHTML = ' <span>6#</span> First ClassJack Harlow';

    let list_7 = document.createElement('li');
    list_7.innerHTML = ' <span>7#</span> WomanDoja Cat';

    let list_8 = document.createElement('li');
    list_8.innerHTML = ' <span>8#</span> Ojitos LindosBad Bunny, Bomba Estéreo';

    let list_9 = document.createElement('li');
    list_9.innerHTML = ' <span>9#</span> Maroon 5 Sugar ';

    let list_10 = document.createElement('li');
    list_10.innerHTML = ' <span>10#</span> OneRepublic – Counting Stars ';

    ulList.appendChild(list);
    ulList.appendChild(list_2);
    ulList.appendChild(list_3);
    ulList.appendChild(list_4);
    ulList.appendChild(list_5);
    ulList.appendChild(list_6);
    ulList.appendChild(list_7);
    ulList.appendChild(list_8);
    ulList.appendChild(list_9);
    ulList.appendChild(list_10);
    button.remove();

    })
}
addList();