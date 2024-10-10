import FlightDetailsHeaderCom from "../componets/FlightDetailsCom/FlightDetailsHeaderCom";
import FlightDetCard from "../componets/FlightDetailsCom/FlightDetCard";

export default function FlightDetails(){
    return(
        <>
        <div className="bg-gray-50">
        <h1 className="text-center text-3xl p-5 my-4
         bg-green-300 text-white">Hearder Flight Details Page</h1>
        <FlightDetailsHeaderCom /> 
        <FlightDetCard />
        <FlightDetCard />
        </div>
        </>
    )
}