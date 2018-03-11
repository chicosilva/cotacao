module.exports = exports = function defaultDates(schema, options) {
    schema.add({
        update_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    });

    schema.pre('save', function (next) {
        this.update_at = new Date;
        next();
    });

    if (options && options.index) {
        schema.path('lastMod').index(options.index);
    }
}