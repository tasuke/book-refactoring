function distanceTravelled (scenario, time) {
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.deley);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
    let secondaryTime = time - scenario.deley;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceleration * scenario.deley;
        const secondaryAccelaration = (scenario.primaryForce + scenario.secondaryForce) /scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * secondaryAccelaration * secondaryTime * secondaryTime;
    }
}