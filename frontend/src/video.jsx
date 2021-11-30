import { useGetVideoByIdQuery } from "./api"
import { useParams } from "react-router-dom";

function Video() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetVideoByIdQuery(id)
    return (
      <div className="App">
        <header className="App-header">
           {data?.attributes.title}
        </header>
      </div>
    );
  }
export default Video;