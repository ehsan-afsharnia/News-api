class News {
  constructor() {
    this.APIkey = "b3d08e660d674c398c29f1de234b793b";
  }

  // Send url to the API

  async queryAPI(newsName, country, category) {
    // Build te url
    let url = "https://newsapi.org/v2/";

    // check the country and category value
    if (country === "" && category === "") {
      url += "everything?";
    } else {
      url += "top-headlines?";
    }

    // if newsName exist

    if (newsName !== "") {
      url += `q=${newsName}&`;
    }

    // if country exist

    if (country !== "") {
      url += `country=${country}&`;
    }

    // if category exist
    if (category !== "") {
      url += `category=${category}&`;
    }

    // Complete url with Key
    url += `apiKey=${this.APIkey}`;

    const newsResponse = await fetch(url);
    const news = await newsResponse.json();
    return {
      news,
    };
  }
}
