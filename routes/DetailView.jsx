import WeatherDetail from "../src/Components/WeatherDetail";
import {useParams} from "react-router-dom";

const DetailView = ({list}) => {
    const {datetime} = useParams();
    const details = list.filter(item => item.datetime === datetime)[0];

    return (
        <div className="App-page">
            <div className="App-row">
                <WeatherDetail list={details}/>
            </div>
        </div>  
    );
};

export default DetailView;