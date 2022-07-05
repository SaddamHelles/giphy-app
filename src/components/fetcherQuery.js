export const fetchGiphyData = (searchText = "") =>
  searchText.length < 1
    ? fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=jSgDMd629zG9yk9mCCcDYqDjmcVelHV6`
      ).then((response) => response.json())
    : fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=jSgDMd629zG9yk9mCCcDYqDjmcVelHV6&q=${searchText}`
      ).then((response) => response.json());
