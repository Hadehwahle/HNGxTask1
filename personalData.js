function currentUTCTime() {
    const now = new Date();
    const utcTime = now.getTime();
    return utcTime;
    }
    
    const timeElement = document.createElement('p');
    timeElement.textContent = currentUTCTime();
    timeElement.setAttribute('data-testid', 'current-time');
    document.getElementById('personalData').appendChild(timeElement);