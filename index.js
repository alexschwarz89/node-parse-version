module.exports = function(versionString) {
    var vparts = versionString.split('.');
    if (vparts.length != 4) throw new Error("version format isn't valid (must be `*.*.*.*`)"); 
    else {
        try {
             return {
                major: parseInt(vparts[0]),
                minor: parseInt(vparts[1]),
                patch: parseInt(vparts[2]),
                build: parseInt(vparts[3]),
            };
        }
        catch(e) {
            return cb(new Error("version format isn't valid (must be `*.*.*.*`)")); 
        }
    }
}