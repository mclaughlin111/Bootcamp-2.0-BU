export const secondsConverter = (seconds: number) => {
  // Check for valid input, if invalid, return "NaN"
  if (isNaN(seconds)) return " ";

  // Calculate the whole minutes
  const minutes = Math.floor(seconds / 60);

  // Calculate the remaining seconds (after minutes are extracted)
  const remainingSeconds = Math.floor(seconds % 60);

  // Calculate hundredths of a second (accurate to two decimal places)
  const hundredths = Math.floor((seconds * 100) % 100);

  // Format the time as M:SS:SS
  const formattedTime = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}:${hundredths.toString().padStart(2, "0")}`;

  return formattedTime;
};
