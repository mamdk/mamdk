let main = document.querySelector('.content');
let sections = document.querySelectorAll('section');
let links_page = document.querySelector('.pages').children;

for (let a of links_page){
    a.onclick = () => {
        for (let link of links_page) {
            link.className = '';
        }
        a.className = `active`
    }
}

