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

const buildCard = function (){

};
// Should look like this
// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>



