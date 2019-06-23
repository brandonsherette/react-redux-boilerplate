import { assert } from 'chai';
import rootSaga from '../rootSaga';

describe('modules/rootSaga', () => {
  it('Should exist', () => {
    assert.exists(rootSaga, 'rootSaga not found');
  });

  it('Should export a function by default', () => {
    assert.equal(typeof rootSaga, 'function', 'rootSaga not a function');
  });
});