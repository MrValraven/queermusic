const MAX_NUMBER_OF_CHARS_IN_ARTIST_BIO = 160;
function truncateText(text, maxLength = MAX_NUMBER_OF_CHARS_IN_ARTIST_BIO) {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space within the limit to avoid cutting words in half
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // If there's no space within the limit, just cut off the text
  return lastSpaceIndex > 0
    ? truncated.slice(0, lastSpaceIndex) + "..."
    : truncated + "...";
}

export { truncateText };
