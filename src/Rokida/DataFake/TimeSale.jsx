export const TimeSale = 'April 6, 2021 9:00:00'
export let interval;
export const StartTime = (h , m , s , d , timeSale) => {
    const countDownDate = new Date(timeSale).getTime();
    interval = setInterval(() => {
        let now = new Date().getTime()
        
        const distance = countDownDate - now
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let Hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        let minutes = Math.floor((distance % ( 1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if(distance < 0 ){
            clearInterval(interval.current)
        }
        else {
            if (days < 10) {days = `0${days}`}
            if (Hours   < 10) {Hours   = `0${Hours}`}
            if (minutes < 10) {minutes = `0${minutes}`}
            if (seconds < 10) {seconds = `0${seconds}`}
            d(`${days}d`)
            h(`${Hours}h`)
            m(`${minutes}m`)
            s(`${seconds}s`)
        }
    },1000)
}