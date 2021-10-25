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


/**
 * Day
 * @returns Current Week Day Name
 */

module.exports = function day() {
    const dayNumber = new Date().getDay()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = dayNames[dayNumber]
    return day
}


/**
 * Month
 * @returns Current Month Name
 */

module.exports = function month() {
    const monthNumber = new Date().getMonth
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[monthNumber]
    return month
}