let myLibrary = [];

function Book(title, author, pages, isRead){

    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    this.info = function() {
        let readMessage = ""
        if (this.isRead) {
            readMessage = "already read"
        } else {
            readMessage = "not read yet"
        }
        return this.title + " by " + this.author + ", " +
        this.pages + " pages, " + readMessage + "."
    }
}

const shelf = document.querySelector("#shelf")

function displayLibrary(library) {

    let shelfContent = ""

    for (let book of library){

        let readMessage = ""
        let readColor = ""
        if (book.isRead) {
            readMessage = "Read"
            readColor = "bg-success"
        } else {
            readMessage = "Unread"
            readColor = "bg-danger"
        }

        let nextCard = `
        <div class="col">
          <div class="card text-dark bg-light h-100">
            <div class="card-header"><h2>${book.title}</h2></div>
            <div class="card-body">
              <div class="card-text">
                <p>${book.author}<br>
                   ${book.pages} pages
                </p>
                <h4><span class="badge ${readColor}">${readMessage}</span></h4>
              </div>
            </div>
          </div>
        </div>        
        `
        shelfContent += nextCard
    }

    shelf.innerHTML = shelfContent
}

let eragon = new Book("Eragon", "Chris Paulini", 500, true)
myLibrary.push(eragon)
let lotr = new Book("Lord of the Rings", "J.R.R. Tolkein", 300, false)
myLibrary.push(lotr)

displayLibrary(myLibrary)