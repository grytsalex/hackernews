import { updateSearchTopStoriesState } from "../helpers";

describe("updateSearchTopStoriesState", () => {
  it("call with correct props must return result", () => {
    const hits = [
      {
        objectID: "23325319",
        author: "DerWOK",
        title: "Guerrilla Public Service Redux (2017)",
      },
      {
        objectID: "14273549",
        author: "jdeal",
        title: "Build Yourself a Redux",
      },
    ];
    const prevState = {
      searchKey: 'redux',
    }
    const page = 0;

    const expected = {results: { redux: { hits , page }}, isLoading: false}

    expect(updateSearchTopStoriesState(hits, page)(prevState)).toEqual(expected);
  });
});
