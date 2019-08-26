import emojiList from "./emojiList.json";

export function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
      emoji.keywords.includes(searchText.toLowerCase())
    )
    .slice(0, maxResults);
}
