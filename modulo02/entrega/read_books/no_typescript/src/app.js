function isBookRead(books, titleToSearch) {
    // Implementation here
    var found = books.find(target => (target.title === titleToSearch));

    return found ? found.isRead : false;
  }
  
  // Ejemplo:
  var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false