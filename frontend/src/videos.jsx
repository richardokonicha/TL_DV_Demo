import logo from './logo.svg';
import { useGetVideosQuery } from "./api"


function Videos() {
    const { data, error, isLoading } = useGetVideosQuery()
  
    console.log(data)
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              {
                data.map((video, i) => (
                  <h3 key={i}>{video.attributes.slug}</h3>
                ))
              }
            </>
          ) : null}
        </header>
      </div>
    );
  }
export default Videos;