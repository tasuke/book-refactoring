function distanceTravelled (scenario, time) {
    let result;
    let acc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.deley);
    result = 0.5 * acc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.deley;
    if (secondaryTime > 0) {
        let primaryVelocity = acc * scenario.deley;
        acc = (scenario.primaryForce + scenario.secondaryForce) /scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
}