function calculateElapsedTime(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const elapsedMs = now - start;

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;
    const averageMsInMonth = msInDay * 30.44; // Average days in a month
    const averageMsInQuarter = averageMsInMonth * 3;
    const averageMsInSemester = averageMsInMonth * 6;
    const averageMsInYear = averageMsInMonth * 12;

    const years = Math.floor(elapsedMs / averageMsInYear);
    const semesters = Math.floor(elapsedMs / averageMsInSemester);
    const quarters = Math.floor(elapsedMs / averageMsInQuarter);
    const months = Math.floor(elapsedMs / averageMsInMonth);
    const weeks = Math.floor(elapsedMs / msInWeek);
    const days = Math.floor(elapsedMs / msInDay);
    const hours = Math.floor(elapsedMs / msInHour);
    const minutes = Math.floor(elapsedMs / msInMinute);
    const seconds = Math.floor(elapsedMs / msInSecond);
    const milliseconds = elapsedMs;

    return {
        years,
        semesters,
        quarters,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        milliseconds
    };
}

function displayElapsedTime() {
    const startDate = '2023-07-31T21:51:00';
    const elapsedTime = calculateElapsedTime(startDate);
    const elapsedTimeList = document.getElementById('elapsed-time');

    // Clear the existing list items
    elapsedTimeList.innerHTML = '';

    for (const [unit, value] of Object.entries(elapsedTime)) {
        const listItem = document.createElement('li');

        const unitSpan = document.createElement('span');
        unitSpan.className = 'unit';
        unitSpan.textContent = unit;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'value';
        valueSpan.textContent = value;

        listItem.appendChild(unitSpan);
        listItem.appendChild(valueSpan);
        elapsedTimeList.appendChild(listItem);
    }
}

// Update the elapsed time every second
setInterval(displayElapsedTime, 1);

// Initial display
displayElapsedTime();
