class ProductionPlan {
    get production() {return this._production;}

    applyAdjustment(andAdjustment){
        this.adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}