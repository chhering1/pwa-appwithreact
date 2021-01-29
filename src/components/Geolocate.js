import { geolocated } from 'react-geolocated';

const Demo = ({
    isGeolocationAvailable, 
    isGeolocationEnabled, 
    coords
}) => {
    return !isGeolocationAvailable ? (
                 <div>Your browser does not support Geolocation</div>
     ) :      !isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{coords.speed}</td>
                    </tr>
                </tbody>
            </table>
    ) :  (
        <div>Getting the location data&hellip; </div>
    );
}
 
export default  geolocated ( {
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);