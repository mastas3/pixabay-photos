import React, { useState, useEffect, useRef } from 'react';

import SearchStyles from './styles';


export default function Search({ doNewSearch, doReset }) {

  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);
  const searchInputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.which === 32) {
      if (e.target.value.trim().length === 0) {
        return;
      }
      setTags([...tags, e.target.value]);
      setValue('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim().length === 0) {
      return;
    }
    setTags([...tags, value]);
    setValue('');
    doNewSearch([...tags, value].join(' '));
  }

  const removeTag = (tagIdx) => {
    const newTags = [...tags.slice(0, tagIdx), ...tags.slice(tagIdx + 1)];
    setTags(newTags);
  }

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (tags.length === 0) {
      doReset();
    }
  }, [tags]);

  return (
    <SearchStyles>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          ref={searchInputRef}
          placeholder='Enter text...'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={value}
        />
        <button
          type='submit'
        >
          Search
        </button>
        <ul className='tags'>
          {tags.map((tag, idx) => <li key={idx + tag} onClick={() => removeTag(idx)}>{tag}</li>)}
        </ul>
      </form>
    </SearchStyles>
  );
}
