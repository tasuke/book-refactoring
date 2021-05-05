
function trackSumamry(points) {
    const totalTime = calculateTime();
    // const totalDistance = totalDistance(points);
    const pace = totalTime / 60 / totalDistance(points);
    return {
        time: totalTime,
        distance: totalDistance(points),
        pace: pace
    };

    // function calculateDistance() {
    //     // let result = 0;
    //     // for(let i=1; i < points.length; i++) {
    //     //     result += distance(points[i-1], points[i]);
    //     // }
    //     // return result;
    //     return top_calculateDistance(points);
    // }

    
    function calculateTime() {}
}

function totalDistance(points) {
    let result = 0;
    for(let i=1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }
    return result;
}

function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat/2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Map.pow(Math.sin(dLon/2), 2);
    const c = 2 * Math.atan2(Math.sqlt(a), Math.sqlt(1-a));
    return EARTH_RADIUS * c;
}

function radians(degrees) {
    return degrees * Math.PI / 180;
}
