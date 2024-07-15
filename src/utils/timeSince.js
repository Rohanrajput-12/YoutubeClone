export const timeSince = (date) => {
    const second = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

    const years = Math.floor(second / 31536000);
    const months = Math.floor(second / 2592000);
    const days = Math.floor(second / 86400);
    const hours = Math.floor(second / 3600);
    const minutes = Math.floor(second / 60);

    
    switch (true) {
        case (years > 1):
            return years + " years";
        case (months > 1):
            return months + " months";
        case (days > 1):
            return days + " days";
        case (hours > 1):
            return hours + " hours";
        case (minutes > 1):
            return minutes + " minutes";
        default:
            return second + " seconds";
    }
}
