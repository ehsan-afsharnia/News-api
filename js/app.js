// -------------|class|------------------

const ui = new UI()
const newsAPI = new News()

















//-------------------|listenres|--------------


listeners()

function listeners() {

    document.querySelector('#submitBtn').addEventListener('click', search)

    
}













//-------------------|functions|-----------------

function search(e) {
    e.preventDefault()
    const newsName = document.querySelector('#news-name').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value

    if (newsName !== '' || country !== '' || category !== '') {
        newsAPI.queryAPI(newsName,country, category)
        .then(news => {
            console.log(news.news.articles);
        })
    } else {
        
        ui.printMessage('Please select at least one field', 'text-center alert alert-danger mt-4')
    }

    
}














