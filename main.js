function printData(){
  var data;
	fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => window.alert(JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}


