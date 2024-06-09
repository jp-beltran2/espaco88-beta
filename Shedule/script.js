const daysElement = document.querySelector('.days');
const monthYearElement = document.getElementById('month-year');
const dateInput = document.getElementById('date');
const eventInput = document.getElementById('event');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    monthYearElement.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    let daysHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dayOfWeek = date.getDay();
        const className = dayOfWeek === 0 || dayOfWeek === 6 ? 'day weekend' : 'day';
        daysHTML += `<div class="${className}" data-day="${i}">${i}</div>`;
    }

    daysElement.innerHTML = daysHTML;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

function addEvent() {
    const date = dateInput.value;
    const event = eventInput.value;

    if (date && event) {
        const dayNumber = parseInt(date.split('-')[2], 10);
        const dayElement = document.querySelector(`.day[data-day="${dayNumber}"]`);
        if (dayElement) {
            const eventElement = document.createElement('div');
            eventElement.textContent = event;
            eventElement.classList.add('event');
            dayElement.appendChild(eventElement);
        }
    }

    dateInput.value = '';
    eventInput.value = '';
}

renderCalendar();