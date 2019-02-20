function printData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => window.alert(JSON.stringify(json)))
    
}


