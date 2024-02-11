const dog_img = document.getElementById('dog-img');
const dog_btn = document.getElementById('btn');

dog_btn.onclick = () =>{
    main_dog();
}

const main_dog = () => {
    get_dog();
}

const get_dog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dog_img.innerHTML = `<img src='${json.message}' styel="height: 500px;width:500px"/>`;
    });
}

