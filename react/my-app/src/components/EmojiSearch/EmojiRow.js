import React from 'react';

export function EmojiRow({ title, symbol }) {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  
  return (
    <tr>
      <td>
        <img alt={title} src={src} />
        <span>{title}</span>
      </td>
    </tr>
  )
}
