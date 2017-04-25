module.exports = function(cb) {
    var vparts = version.split('.');
    if (vparts.length != 4) return cb(new Error("version format isn't valid (must be `*.*.*.*`)")); 
    else {
        try {
             cb(null,{
                major: parseInt(vparts[0]),
                minor: parseInt(vparts[1]),
                patch: parseInt(vparts[2]),
                build: parseInt(vparts[3]),
            });
        }
        catch(e) {
            return cb(new Error("version format isn't valid (must be `*.*.*.*`)")); 
        }
    }
}