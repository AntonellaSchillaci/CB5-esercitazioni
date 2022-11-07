fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json()) //converte a json
   .then(users => users.map((user) => 
        console.log("Name: " + user.name, 
        "\n", "Address: " + JSON.stringify(user.address), 
        "\n", "City: " + user.address.city))) //stampa i dati
   .catch((err) => console.log("error: " + err))
   .finally (() => console.log("-----------done----------"));


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json()) 
    .then(todos => todos.map((todo) =>
        console.log("Id: " + todo.id,
        "\n", "Title: " + todo.title)))
    .catch((err) => console.log ("error: " + err))
    .finally (() => console.log("-----------done-----------"));
 


