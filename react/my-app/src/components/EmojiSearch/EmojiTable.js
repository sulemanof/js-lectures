import React from 'react';
import { EmojiRow } from './EmojiRow'
import './index.css';

export function EmojiTable({ emojiArray }) {
  return (
    <table className="emojiTable table table-light table-hover">
      <tbody>
        {emojiArray.map(emoji =>
          <EmojiRow key={emoji.title} {...emoji} />
        )}
      </tbody>
    </table>
  )
}
