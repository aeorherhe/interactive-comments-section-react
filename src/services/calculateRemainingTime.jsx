// prettier-ignore

export function calculatePostTime(postTime) {
  const currentTime = new Date().getTime();
  const remainingTime = currentTime - postTime;

  // convert to days, hours, minutes, seconds
  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  // calculate all values
  const years = Math.floor(remainingTime / oneYear);
  const months = Math.floor((remainingTime % oneYear) / oneMonth);
  const weeks = Math.floor((remainingTime % oneMonth) / oneWeek);
  const days = Math.floor((remainingTime % oneWeek) / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  const seconds = Math.floor((remainingTime % oneMinute) / oneSecond);

  // get time values
  if (years == 1) return `${years} year ago`;
  else if (years > 1) return `${years} years ago`;
  else if (months == 1) return `${months} month ago`;
  else if (months > 1) return `${months} months ago`;
  else if (weeks == 1) return `${weeks} week ago`;
  else if (weeks > 1) return `${weeks} weeks ago`;
  else if (days == 1) return `${days} day ago`;
  else if (days > 1) return `${days} days ago`;
  else if (hours == 1) return `${hours} hour ago`;
  else if (hours > 1) return `${hours} hours ago`;
  else if (minutes == 1) return `${minutes} minute ago`;
  else if (minutes > 1) return `${minutes} minutes ago`;
  else if (seconds == 1) return `${seconds} second ago`;
  else if (seconds > 1) return `${seconds} seconds ago`;
  else return "just now";


  // switch (timeValues) {
  //   case years == 1:
  //     return `${years} year ago`;
  //   case years > 1:
  //     return `${years} years ago`;
  //   case months == 1:
  //     return `${months} month ago`;
  //   case months > 1:
  //     return `${months} months ago`;
  //   case weeks == 1:
  //     return `${weeks} week ago`;
  //   case weeks > 1:
  //     return `${weeks} weeks ago`;
  //   case days == 1:
  //     return `${days} day ago`;
  //   case days > 1:
  //     return `${days} days ago`;
  //   case hours == 1:
  //     return `${hours} hour ago`;
  //   case hours > 1:
  //     return `${hours} hours ago`;
  //   case minutes == 1:
  //     return `${minutes} minute ago`;
  //   case minutes > 1:
  //     return `${minutes} minutes ago`;
  //   case seconds == 1:
  //     return `${seconds} second ago`;
  //   case seconds > 1:
  //     return `${seconds} seconds ago`;
  //   default:
  //     return "Just now";
  // }


}
