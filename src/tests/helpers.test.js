import { updateSearchTopStoriesState } from '../helpers';

describe('updateSearchTopStoriesState', () => {
    // Todo write test for HOC
    const hits = [{title: 'newTitle'}, {title: 'newTitle1'}];
    const page = 1;
    const result = {hits, page};

    it('call with correct props must return result', () => {
        expect(updateSearchTopStoriesState(hits, page)).toEqual(result);
    })
})