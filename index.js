module.exports = function mongooseReloadPlugin(schema) {

    schema.method("reload", function reload(...args) {

        let projection;
        let done = function done() {};

        // check the first argument
        if (typeof (args[0]) === "function") {
            done = args[0];
        } else if (typeof (args[0]) === "object") {
            // the projection can be only the first parameter
            projection = args[0];

            // in this case the callback could be
            // the second parameter
            if (typeof (args[1]) === "function") {
                done = args[1];
            }
        }

        return this.constructor.findOne({ _id: this._id }, projection).exec(done);
    });

};
