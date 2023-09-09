function getUTCDay() {
    const now = new Date();
        const utcDay = now.getUTCDay();
        return utcDay;
}

function currentUTCTime() {
    const now = new Date();
    const utcTime = now.getTime();
    return utcTime;
    }

const dayElement = document.createElement('p');
dayElement.textContent = "Current day of the Week: " + getUTCDay();
dayElement.setAttribute('data-testid', 'utc-day');
document.getElementById('personalData').appendChild(dayElement);
const timeElement = document.createElement('p');
timeElement.textContent = currentUTCTime();
timeElement.setAttribute('data-testid', 'current-time');
document.getElementById('personalData').appendChild(timeElement);
