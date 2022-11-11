/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@modyolabs/modyo-design-system/components';

import { defineCustomElement as defineMAlert } from '@modyolabs/modyo-design-system/components/m-alert.js';
import { defineCustomElement as defineMApp } from '@modyolabs/modyo-design-system/components/m-app.js';
import { defineCustomElement as defineMBadge } from '@modyolabs/modyo-design-system/components/m-badge.js';
import { defineCustomElement as defineMButton } from '@modyolabs/modyo-design-system/components/m-button.js';
import { defineCustomElement as defineMCounter } from '@modyolabs/modyo-design-system/components/m-counter.js';
import { defineCustomElement as defineMCoupon } from '@modyolabs/modyo-design-system/components/m-coupon.js';
import { defineCustomElement as defineMCurrency } from '@modyolabs/modyo-design-system/components/m-currency.js';
import { defineCustomElement as defineMFormCheck } from '@modyolabs/modyo-design-system/components/m-form-check.js';
import { defineCustomElement as defineMFormSwitch } from '@modyolabs/modyo-design-system/components/m-form-switch.js';
import { defineCustomElement as defineMHint } from '@modyolabs/modyo-design-system/components/m-hint.js';
import { defineCustomElement as defineMIcon } from '@modyolabs/modyo-design-system/components/m-icon.js';
import { defineCustomElement as defineMInput } from '@modyolabs/modyo-design-system/components/m-input.js';
import { defineCustomElement as defineMListItem } from '@modyolabs/modyo-design-system/components/m-list-item.js';
import { defineCustomElement as defineMModal } from '@modyolabs/modyo-design-system/components/m-modal.js';
import { defineCustomElement as defineMQuickAction } from '@modyolabs/modyo-design-system/components/m-quick-action.js';
import { defineCustomElement as defineMSearch } from '@modyolabs/modyo-design-system/components/m-search.js';
import { defineCustomElement as defineMSegmentControl } from '@modyolabs/modyo-design-system/components/m-segment-control.js';
import { defineCustomElement as defineMSegmentControlItem } from '@modyolabs/modyo-design-system/components/m-segment-control-item.js';
import { defineCustomElement as defineMSelect } from '@modyolabs/modyo-design-system/components/m-select.js';
import { defineCustomElement as defineMShortcutToggle } from '@modyolabs/modyo-design-system/components/m-shortcut-toggle.js';


export declare interface MAlert extends Components.MAlert {
  /**
   * Emitted when the button has been clicked. 
   */
  mClose: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMAlert,
  inputs: ['showClose', 'showIcon', 'theme']
})
@Component({
  selector: 'm-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['showClose', 'showIcon', 'theme']
})
export class MAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MApp extends Components.MApp {}

@ProxyCmp({
  defineCustomElementFn: defineMApp,
  inputs: ['iconSettings']
})
@Component({
  selector: 'm-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconSettings']
})
export class MApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MBadge extends Components.MBadge {}

@ProxyCmp({
  defineCustomElementFn: defineMBadge,
  inputs: ['text', 'theme']
})
@Component({
  selector: 'm-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text', 'theme']
})
export class MBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MButton extends Components.MButton {
  /**
   * Emitted when the button has been clicked. 
   */
  mClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMButton,
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isPill', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isPill', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
export class MButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
  }
}


export declare interface MCounter extends Components.MCounter {
  /**
   * Event for input change 
   */
  mInput: EventEmitter<CustomEvent<any>>;
  /**
   * Event for button pressed 
   */
  mClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMCounter,
  inputs: ['disabled', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'label', 'layoutDirection', 'mId', 'max', 'min', 'theme', 'value', 'variant']
})
@Component({
  selector: 'm-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'label', 'layoutDirection', 'mId', 'max', 'min', 'theme', 'value', 'variant']
})
export class MCounter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mInput', 'mClick']);
  }
}

import type { CouponEvent as IMCouponCouponEvent } from '@modyolabs/modyo-design-system/components';
export declare interface MCoupon extends Components.MCoupon {
  /**
   * Emitted when the button is clicked 
   */
  mClick: EventEmitter<CustomEvent<IMCouponCouponEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMCoupon,
  inputs: ['hasSelect', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconLabel', 'iconLabelFamilyClass', 'iconLabelFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'label', 'layoutDirection', 'mId', 'placeholder', 'textButton', 'theme', 'type']
})
@Component({
  selector: 'm-coupon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hasSelect', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconLabel', 'iconLabelFamilyClass', 'iconLabelFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'label', 'layoutDirection', 'mId', 'placeholder', 'textButton', 'theme', 'type']
})
export class MCoupon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
  }
}

import type { CurrencyEvent as IMCurrencyCurrencyEvent } from '@modyolabs/modyo-design-system/components';
export declare interface MCurrency extends Components.MCurrency {
  /**
   * Emitted when the inputs change 
   */
  mChange: EventEmitter<CustomEvent<IMCurrencyCurrencyEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMCurrency,
  inputs: ['currencyOptions', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconLabel', 'iconLabelFamilyClass', 'iconLabelFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'label', 'labelExtractor', 'layoutDirection', 'mId', 'maxValue', 'minValue', 'placeholder', 'selectOptions', 'theme', 'value', 'valueExtractor', 'variant']
})
@Component({
  selector: 'm-currency',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currencyOptions', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconLabel', 'iconLabelFamilyClass', 'iconLabelFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'label', 'labelExtractor', 'layoutDirection', 'mId', 'maxValue', 'minValue', 'placeholder', 'selectOptions', 'theme', 'value', 'valueExtractor', 'variant']
})
export class MCurrency {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MFormCheck extends Components.MFormCheck {
  /**
   * Emitted when the switch has changed 
   */
  mChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMFormCheck,
  inputs: ['checked', 'disabled', 'indeterminate', 'isButton', 'label', 'mId', 'name', 'state', 'type', 'value']
})
@Component({
  selector: 'm-form-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'isButton', 'label', 'mId', 'name', 'state', 'type', 'value']
})
export class MFormCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MFormSwitch extends Components.MFormSwitch {
  /**
   * Emitted when the switch has changed 
   */
  mChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMFormSwitch,
  inputs: ['isChecked', 'isDisabled', 'label', 'labelOff', 'labelOn', 'mId']
})
@Component({
  selector: 'm-form-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isChecked', 'isDisabled', 'label', 'labelOff', 'labelOn', 'mId']
})
export class MFormSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MHint extends Components.MHint {}

@ProxyCmp({
  defineCustomElementFn: defineMHint,
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconSize', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'text', 'theme']
})
@Component({
  selector: 'm-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconSize', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'text', 'theme']
})
export class MHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MIcon extends Components.MIcon {}

@ProxyCmp({
  defineCustomElementFn: defineMIcon,
  inputs: ['backgroundColor', 'color', 'duration', 'familyClass', 'familyPrefix', 'icon', 'isLoading', 'size', 'theme']
})
@Component({
  selector: 'm-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backgroundColor', 'color', 'duration', 'familyClass', 'familyPrefix', 'icon', 'isLoading', 'size', 'theme']
})
export class MIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MInput extends Components.MInput {
  /**
   * Emitted when the input value has changed 
   */
  mChange: EventEmitter<CustomEvent<string | number>>;
  /**
   * Emitted when blur the input 
   */
  mBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'name', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'name', 'placeholder', 'type', 'value']
})
export class MInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mBlur']);
  }
}


export declare interface MListItem extends Components.MListItem {
  /**
   * Emitted when the right custom icon has been clicked. 
   */
  mCustomClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMListItem,
  inputs: ['alternativeValue', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'isLoading', 'isPill', 'navegableProps', 'rightIconCustomAction', 'rightIconCustomActionClass', 'selectableProps', 'subtext', 'text', 'theme', 'themeValue', 'value', 'variant']
})
@Component({
  selector: 'm-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alternativeValue', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'isLoading', 'isPill', 'navegableProps', 'rightIconCustomAction', 'rightIconCustomActionClass', 'selectableProps', 'subtext', 'text', 'theme', 'themeValue', 'value', 'variant']
})
export class MListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mCustomClick']);
  }
}


export declare interface MModal extends Components.MModal {
  /**
   * Emitted when the input value has changed 
   */
  mClose: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMModal,
  inputs: ['centered', 'closeText', 'fullScreen', 'fullScreenFrom', 'imageHeader', 'modalSize', 'name', 'scrollable', 'showCloseButton', 'static']
})
@Component({
  selector: 'm-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['centered', 'closeText', 'fullScreen', 'fullScreenFrom', 'imageHeader', 'modalSize', 'name', 'scrollable', 'showCloseButton', 'static']
})
export class MModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MQuickAction extends Components.MQuickAction {
  /**
   * Emitted when the input value has changed 
   */
  mClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMQuickAction,
  inputs: ['actionIcon', 'actionWord', 'extraInfo', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'state', 'subtext', 'text', 'variant']
})
@Component({
  selector: 'm-quick-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionIcon', 'actionWord', 'extraInfo', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'state', 'subtext', 'text', 'variant']
})
export class MQuickAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
  }
}


export declare interface MSearch extends Components.MSearch {
  /**
   * Emitted when the input value has changed 
   */
  mChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the button is clicked 
   */
  mClick: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMSearch,
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'isDisabled', 'isReadOnly', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'placeholder', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'm-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'isDisabled', 'isReadOnly', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'placeholder', 'theme', 'type', 'value', 'variant']
})
export class MSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mClick']);
  }
}


export declare interface MSegmentControl extends Components.MSegmentControl {}

@ProxyCmp({
  defineCustomElementFn: defineMSegmentControl,
  inputs: ['description']
})
@Component({
  selector: 'm-segment-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description']
})
export class MSegmentControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MSegmentControlItem extends Components.MSegmentControlItem {
  /**
   * Emitted when the input value has changed 
   */
  mChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMSegmentControlItem,
  inputs: ['checked', 'disabled', 'label', 'mId', 'name', 'state', 'value']
})
@Component({
  selector: 'm-segment-control-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'mId', 'name', 'state', 'value']
})
export class MSegmentControlItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MSelect extends Components.MSelect {
  /**
   * Emitted when the select value has changed 
   */
  mChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input 
   */
  mBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMSelect,
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'label', 'labelExtractor', 'layoutDirection', 'mId', 'name', 'options', 'selectedOption', 'theme', 'valueExtractor', 'variant']
})
@Component({
  selector: 'm-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'label', 'labelExtractor', 'layoutDirection', 'mId', 'name', 'options', 'selectedOption', 'theme', 'valueExtractor', 'variant']
})
export class MSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mBlur']);
  }
}


export declare interface MShortcutToggle extends Components.MShortcutToggle {
  /**
   * Emitted when the select value has changed 
   */
  mChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMShortcutToggle,
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'isChecked', 'label', 'mId', 'name', 'state', 'subtext', 'text', 'value', 'white']
})
@Component({
  selector: 'm-shortcut-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'isChecked', 'label', 'mId', 'name', 'state', 'subtext', 'text', 'value', 'white']
})
export class MShortcutToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}
