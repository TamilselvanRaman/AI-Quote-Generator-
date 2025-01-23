
function NewQuote(){
    getquote();
}

//const api_url = 'https://quotes-api-self.vercel.app/quote'; 

function getquote() {
    fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
        // Handle the retrieved quote
        console.log(data);
        document.getElementById("quote").innerHTML = "\" "+data.quote+" \"";
        document.getElementById("author").innerHTML = "- "+data.author; 
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  
}
