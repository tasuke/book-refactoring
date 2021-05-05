
function plumages(bird) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(bird) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird){ return new Bird(bird).plumage;}
function airSpeedVelocity(bird) {return new Bird(bird).airSpeedVelocity;}

// ファクトリメソッドを作成
function createBird(bird){
    switch(bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    } 
}


class Bird{
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }


    get plumage(bird) {
        return "unknown";
    }

    get airSpeedVelocity(bird) {
        return null;
    }
}

// サブクラスを作成
class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
    get airSpeedVelocit(){
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (bird.numberOfCoconuts > 2) ? "tired" : "average";
    }
    get airSpeedVelocit(){
        return 40 - 2 * bird.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (bird.voltage > 100) ? "scorched" : "beautiful";
    }
    get airSpeedVelocit(){
        return (bird.isNailed) ? 0 : bird.voltage/10;
    }
}
