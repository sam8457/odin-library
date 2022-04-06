
// ##### CLASSES ##### 

class Book {

  constructor(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }

  info() {
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

class Library {

  libraryArray = []

  displayLibrary() {

      let shelfContent = ""

      for (let i = 0; i < this.libraryArray.length; i++){
          let book = this.libraryArray[i]

          let readMessage = ""
          let readColor = ""
          if (book.isRead) {
              readMessage = "Read"
              readColor = "bg-info"
          } else {
              readMessage = "Unread"
              readColor = "bg-warning"
          }

          let nextCard = `
          <div class="col">
          <div class="card text-dark bg-light h-100">
            <div class="card-header d-flex justify-content-between">
              <h3 class="me-2">${book.title}</h3>
              <button id="x${i}" class="btn btn-outline-primary" style="height: 2.4em; width: 2.4em;">X</button>
            </div>
            <div class="card-body">
              <div class="card-text d-flex flex-column justify-content-between">
                <h4 class="d-flex justify-content-between">
                  <span id=r${i} class="badge ${readColor}">${readMessage}</span>
                </h4>
                <p>
                  <em>${book.author}</em><br>
                  ${book.pages} pages
                </p>
              </div>
            </div>
          </div>
          </div>        
          `

          shelfContent += nextCard

      }

      shelf.innerHTML = shelfContent

      for (let i = 0; i < this.libraryArray.length; i++) {
          let thisX = document.getElementById("x" + i)
          thisX.addEventListener("click", () => removeFromLibrary(thisX.id.substring(1)))

          let thisR = document.getElementById("r" + i)
          thisR.addEventListener("click", () => toggleRead(thisR.id.substring(1)))
      }
  }

  addToLibrary() {
      let title = document.getElementById("title").value
      let author = document.getElementById("author").value
      let pages = document.getElementById("pages").value
      let isRead = document.getElementById("isread").checked
      
      let newBook = new Book(title, author, pages, isRead)
      this.libraryArray.push(newBook)

      displayLibrary()
  }

  removeFromLibrary(item) {
      this.libraryArray.splice(item, 1)
      displayLibrary()
  }

  toggleRead(item) {
      this.libraryArray[item]["isRead"] = !this.libraryArray[item]["isRead"]
      displayLibrary()
  }
  
}


// ##### MAIN #####

const shelf = document.querySelector("#shelf")

let myLibrary = new Library()
console.log(myLibrary)

let adder = document.getElementById("adder")
adder.addEventListener("click", myLibrary.addToLibrary)

let eragon = new Book("Eragon", "Chris Paulini", 500, true)
let lotr = new Book("The Hobbit", "J.R.R. Tolkein", 297, false)
//this.libraryArray.push(eragon)
myLibrary.libraryArray.push(lotr)

myLibrary.displayLibrary()

let text = "Hello world!";
let result = text.substring(1, 4);