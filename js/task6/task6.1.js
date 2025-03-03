function getApi() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText).recipes;

            var newDiv = document.getElementById("test");
            newDiv.innerHTML = "";

            var content = "";

            for (var i = 0; i < data.length; i++) {
                content += `
                    <div class="col-md-4 mb-3">
                        <div class="card shadow-lg mt-5 pt-5">
                            <img src="${data[i].image_url}" class="card-img-top img-fluid" alt="${data[i].title}" style="height: 300px; object-fit: cover;">
                            <div class="card-body text-center">
                                <h2 class="h5">${data[i].title}</h2>
                                <h3 class="text-warning">👨‍🍳 Publisher: ${data[i].publisher}</h3>
                                <a href="${data[i].source_url}" target="_blank" class="btn btn-primary mt-2">View Recipe</a>
                            </div>
                        </div>
                    </div>
                `;
            }
            newDiv.innerHTML = content;
        }
    };

    xhttp.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza", true);
    xhttp.send();
}
