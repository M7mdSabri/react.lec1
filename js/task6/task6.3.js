
(async function () {
    var api = await fetch("https://dummyjson.com/recipes");
    var items = await api.json();
    var data = items.recipes;
    var myCarateen = "";

    for (var i = 0; i < data.length; i++) {
        var cartona =
            `
                        <div class="col-md-3 text-center mb-4">
                            <div class="card shadow-lg mt-5 pt-5">
                                <img src="${data[i].image}" class="card-img-top img-fluid" alt="Recipe Image">
                                <div class="card-body">
                                    <h2 class="h5">${data[i].name}</h2>
                                    <h3 class="text-warning">⭐ ${data[i].rating}</h3>
                                    <h4 class="text-muted">${data[i].cuisine}</h4>
                                </div>
                            </div>
                        </div>
                        `;
                        myCarateen = myCarateen + cartona;
    }
    document.querySelector("#test").innerHTML=myCarateen;
})();
