let books = [
    ["book id", 'book title', 'author', 'price', 'quantity']
];
function addBook(id, bookTitle, author, price, quantity) {
    books.push([id, bookTitle, author, price, quantity]);
}

function deleteBook(id){
    if (id == 0){
        return "id can't be 0";
    }
    for(let i = 0; i < 1000000; i++){
        if (books[i][0] == id){
            books[i][0] = null, books[i][1] = null, books[i][2] = null, books[i][3] = null, books[i][4] = null;
            break;
        }
    }
}
function editBook(id, bookTitle, author, price, quantity){
    if (id == 0){
        return "id can't be 0";
    }
    for(let i = 0; i < 1000000; i++){
        if (books[i][0] == id){
            books[i][0] = id, books[i][1] = bookTitle, books[i][2] = author, books[i][3] = price, books[i][4] = quantity;
            break;
        }
    }
}

addBook(1, 'java', 'Author 1', 10.99, 33);
addBook(2, 'js', 'Author 2', 12.99, 80);
addBook(3, 'c', 'Author 3', 14.99, 40);
console.log("Books:", books);

deleteBook(0);
console.log("Books:", books);

editBook(3, 'c++', 'Author 4', 17.99, 50);
console.log("Books:", books);

function searchBook(id){
    if (id == 0){
        return "id can't be 0";
    }
    for(let i = 0; i < 1000000; i++){
        if (books[i][0] == id){
            console.log(books[i][0] + books[i][1] + books[i][2] + books[i][3] + books[i][4]);
            break;
        }
    }
}

searchBook(1);

function bookbuy(bookTitle, quantity, money){
    for(let i = 0; i < 1000000; i++){
        if (books[i][1] == bookTitle){
            if (books[i][4] >= quantity){
                if (money >= books[i][3] * quantity){
                    books[i][4] = books[i][4] - quantity;
                    break;
                }else{ return "money isn't enough"; break;}
            }else{ return "not available"; break;}
        }else{ return "not available"; break;}
    }
}