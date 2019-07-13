import Vue from 'vue'
import WidgetWC from './components/widget-wc';
import wrap from '@vue/web-component-wrapper';

const WrappedElement = wrap(Vue, WidgetWC);

window.customElements.define('widget-wc', WrappedElement);
