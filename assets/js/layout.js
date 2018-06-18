/**
 * @param {*} idName 
 */

const buildRow = function (idName = ""){
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.setAttribute('id', idName);
    return div;
};

const buildCol = function (colNum = 0, idName = ""){
    let div = document.createElement('div');
    if(colNum > 0){
        div.setAttribute('class', 'col-' + colNum);
        div.setAttribute('id', idName);
        return div;
    }
    else{
        div.setAttribute('class', 'col');
        div.setAttribute('id', idName);
        return div;
    }
};

const buildCard = function (image, title, link = "#", onclick=""){
    let card = document.createElement('div');
    card.setAttribute('class', 'card text-center');
    let body = document.createElement('div');
    body.setAttribute('class', 'card-body');
};
// Should look like this
// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>



