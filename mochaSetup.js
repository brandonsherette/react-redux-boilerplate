import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
global.self = global.window;
global.window.isUnitTesting = true; // let localStorage or window type testing to be ignored