let array = [];
function generateBlocks() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.prepend(container);
    container.style.height = '500px';
    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    container.prepend(innerContainer);
    innerContainer.style.width = '250px';
    innerContainer.style.height = '250px';
    innerContainer.style.display = 'flex';
    innerContainer.style.flexWrap = 'wrap';

    function getItem() {
        for (let i = 0; i <= 25 - 1; i++) {
            const item = document.createElement('div');
            item.classList.add('item' + (i + 1));
            innerContainer.append(item);
            item.style.width = '50px';
            item.style.height = '50px';
            array.push(item);
        }
    }
    getItem();
}
generateBlocks();

function generateBlocksInterval(){
    function generateNumber(){
        const number = Math.floor(Math.random()* (250 - 0 + 1) + 0);
        return number;
    }

   function createColor(){
       setInterval(() => {
           array.forEach(el => {
               el.style.backgroundColor = 'rgb' + '(' + generateNumber() + ',' + generateNumber() + ',' + generateNumber() + ')';
           })
       }, 1000);
   }
   createColor();
}
generateBlocksInterval();