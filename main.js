var data = {
  title: 'foo',
  body: 'bar',
  userId: 1
}
function printData(data){
	fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => window.alert(JSON.stringify(json)))
  .catch(error => console.error('Error:', error));
}
