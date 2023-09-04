/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MONDAY,
  TUESSDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

const isWeekend = (day: Days): boolean => {
    return day === Days.SATURDAY || day === Days.SUNDAY
}

const today = Days.FRIDAY;

if (isWeekend(today)) {
  console.log('Вихідний день');
} else {
  console.log('Робочий день');
}