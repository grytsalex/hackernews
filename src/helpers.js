import { sortBy } from "lodash";

export const SORT = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENTS: (list) => sortBy(list, "num_comments").reverse(),
  POINTS: (list) => sortBy(list, "points").reverse(),
};

export const updateSearchTopStoriesState = (hits, page) => (prevState) => {
  const { searchKey, results } = prevState;

  const oldHits =
  results && results[searchKey] ? results[searchKey].hits : [];

  const updatedHits = [...oldHits, ...hits];
  return {
    results: { ...results, [searchKey]: { hits: updatedHits, page } },
    isLoading: false,
  }
}
 
