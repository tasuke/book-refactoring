class ProductionPlan {
    get production() {
        // assert(this._production === this.calcuratedProduction);
        // return this._production;
        return this._adjustments
        .reduce((sum,a) => sum + a.amount, 0);
    }

    applyAdjustment(andAdjustment){
        this.adjustments.push(anAdjustment);
        // this._production += anAdjustment.amount;
    }

    // get calcuratedProduction() {
    //     return this._adjustments
    //                 .reduce((sum,a) => sum + a.amount, 0);
    // }
}