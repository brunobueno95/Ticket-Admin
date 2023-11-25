export function TruncateString(
  inputString: string,
  maxLength: number = 120
): string {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength - 3) + "...";
  } else {
    return inputString;
  }
}
