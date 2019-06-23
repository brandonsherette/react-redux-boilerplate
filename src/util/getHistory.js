import createHistory from 'history/createHashHistory';

/**
 * Gets the history object.
 * @function getHistory
 * @return {Object} the history object.
 */
export default function getHistory() {
  return createHistory();
}