define([
    './Type',
    './TimeConductor'
], function (
    Type,
    TimeConductor
) {
    return {
        Type: Type,
        TimeConductor: new TimeConductor()
    };
});
