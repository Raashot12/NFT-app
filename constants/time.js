function generateRandomTime() {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 60);

  const hoursText = hours === 1 ? "1h" : `${hours}h`;
  const minutesText = minutes === 0 ? "" : `${minutes}m`;

  return `${hoursText} ${minutesText}`;
}

export const generateTime = generateRandomTime();
