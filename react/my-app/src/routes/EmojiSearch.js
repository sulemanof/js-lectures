import React, { useState, useCallback } from 'react';
import { filterEmoji } from '../utils/emojiFilter';
import { EmojiTable } from '../components/EmojiSearch/EmojiTable';

export function EmojiSearch() {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = useCallback((ev) => setInputValue(ev.target.value), []);

  return (
    <>
      <input
        type='text'
        className='form-control form-control-lg'
        value={inputValue}
        onChange={onInputChange}
        placeholder="Type an emoji..." />

      <EmojiTable emojiArray={filterEmoji(inputValue, 20)} />
    </>
  )
}
