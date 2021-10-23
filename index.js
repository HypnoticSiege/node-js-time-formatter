/**
 * Format Seconds into readable text
 * @param {string} [seconds]
 */

module.exports = function format(seconds) {
        var timeSecs = seconds
        var seconds = parseInt(timeSecs);
        var days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        var hrs = Math.floor(seconds / 3600);
        seconds -= hrs * 3600;
        var mnts = Math.floor(seconds / 60);
        seconds -= mnts * 60;
        const timeFormat = days + " Days, " + hrs + " Hours, " + mnts + " Minutes, and " + seconds + " Seconds"
        
    return timeFormat
};