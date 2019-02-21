var data;
var temp;
function printData(data){
	fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => temp = json)
  .then(json => window.alert(JSON.stringify(temp)))
  .then(json => console.log("SUCCESS: " + JSON.stringify(temp)))
  .catch(error => console.error('Error:', error));
}
