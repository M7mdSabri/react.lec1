function getApi(){
    fetch ("https://api.escuelajs.co/api/v1/products")
    .then (function (data){
        return data.json();
    })
    .then (function (item){
        var myCarateen = "";

    for (var i = 0; i < item.length; i++) {
        var cartona =
            `
                        <div class="col-md-3 text-center mb-4">
                            <div class="card shadow-lg mt-5 pt-5">
                                <img src="${item[i].images[1]}" class="card-img-top img-fluid" alt="Recipe Image">
                                <div class="card-body">
                                    <h2 class="h5">${item[i].title}</h2>
                                    <h3 class="text-warning">⭐ ${item[i].price}</h3>
                                    <h4 class="text-muted">${item[i].description}</h4>
                                </div>
                            </div>
                        </div>
                        `;
                        myCarateen = myCarateen + cartona;
    }
    document.querySelector("#test").innerHTML=myCarateen;
    })
}