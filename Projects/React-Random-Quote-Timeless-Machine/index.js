function App() {

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#111")

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length)
      setRandomQuote(data[randIndex])
      
    }
    fetchData();
  }, [])


    
    const getNewQuote = () => {
      const colors = [
        '#FFC0CB', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FFA500',
        '#800080', '#196f3d', '#341b5b', '#505f72', '#764818', '#374753', '#2ac304',
        '#f761a2', '#caa649', '#123456', '#789012', '#FF5733', '#581845', '#C70039',
        '#900C3F', '#FFC300', '#FF5733', '#DAF7A6', '#FFC300', '#581845', '#FF5733',
        '#581845', '#DAF7A6', '#900C3F'
      ];
      
    let randIndex = Math.floor(Math.random() * quotes.length)
    let randColorIndex = Math.floor(Math.random() * colors.length)
    setColor(colors[randColorIndex])

      setRandomQuote(quotes[randIndex])
  }




  return (
    <div style={{backgroundColor: color, minHeight:"100vh"}}>
    <div className="container pt-5">
       
      <div className="jumbotron">
        <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
            {randomQuote ? (
              <>
              <h5 className ="card-title">- {randomQuote.author || "Anonymous"}</h5>
              <p className="card-text">&quot;{randomQuote.text}&quot;</p>
              </>
              
            ) : (
              <h2>Refreshing</h2>
            ) }

          <div className="col">
            <button onClick={getNewQuote} className="btn btn-primary">Generate Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" class="btn btn-danger">Tweet Quote<i class="fa-brands fa-twitter fa-shake"></i></a>
            
    
          </div>


          </div>


            
        </div>
      </div>

      {/*{quotes.map(quote => (
        <div>{quote.text}</div>
      ))}*/}
    </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'))