const calendar = document.querySelector('.calendar__scrollable'),
  nextDay = document.querySelector('.calendar__arrow_next'),
  prevDay = document.querySelector('.calendar__arrow_prev'),
  calendarDays = document.querySelector('.calendar__items').children.length,
  calendarLine = document.querySelector('.calendar__line'),
  defWidth = document.querySelector('.calendar__item').clientWidth; //- ширина блока

//- устанавливает ширину линии. дополнительные 50px нужны чтобы линия доходила полностью до конца блока
calendarLine.style.width = `${(calendarDays * defWidth) + 50}px`;

//- слушает за скроллом в календаре, и переключает стрелку "назад"
calendar.addEventListener("scroll", () => calendar.scrollLeft == 0 ? prevDay.classList.add('hide') : prevDay.classList.remove('hide'));

const sideScroll = dir => dir == "left" ? calendar.scrollLeft -= defWidth : calendar.scrollLeft += defWidth;
nextDay.addEventListener("click", () => sideScroll());
prevDay.addEventListener("click", () => sideScroll('left'));