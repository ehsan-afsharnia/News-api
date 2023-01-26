class UI {
  constructor() {
    this.result = document.querySelector("#result");
  }

  // Show any message in HTML
  printMessage(message, className) {
    // Create div tag

    const div = document.createElement("div");

    // Append text message to the div tag
    div.appendChild(document.createTextNode(message));
    //Append class name to the tag
    div.className = className;

    //Show message into the HTML
    document.querySelector("#message").appendChild(div);

    // Remove message after 2 second

    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }

  // Remove message after showing into the HTML

  removeMessage() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  // Showing result into the HTML

  showNews(news) {
    news.forEach((newsInfo) => {
      this.result.innerHTML += ` <div class="col-md-4 mb-4">
<div class="card">
    <img src="${newsInfo.urlToImage}" alt="card-img-top">
    <div class="card-body">
        <h2 class="card-title text-center">
        ${newsInfo.title.split("-", 1)}
        </h2>
        <p class="card-text lead textto-info">
            news information :
        </p>
        <P class="text-center">
        ${newsInfo.description}
        </P>
        <span class="badge badge-primary">
            source : ${newsInfo.source.name}
        </span>
        <span class="badge badge-primary">
            Date & time : ${newsInfo.publishedAt}
        </span>
        <br><br>
        <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">
        Complete news
        </a>

    </div>           
    </div>
</div>
            
            
            `;
    });
  }
}
