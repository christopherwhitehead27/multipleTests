import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    dynamicRemove(itemWithDashes) {
        return $(`#remove-${itemWithDashes}`)
    }
}