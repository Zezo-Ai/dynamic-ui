/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@modyo-dynamic/modyo-design-system/components';

import { defineCustomElement as defineMAlert } from '@modyo-dynamic/modyo-design-system/components/m-alert.js';
import { defineCustomElement as defineMApp } from '@modyo-dynamic/modyo-design-system/components/m-app.js';
import { defineCustomElement as defineMBadge } from '@modyo-dynamic/modyo-design-system/components/m-badge.js';
import { defineCustomElement as defineMButton } from '@modyo-dynamic/modyo-design-system/components/m-button.js';
import { defineCustomElement as defineMFormCheck } from '@modyo-dynamic/modyo-design-system/components/m-form-check.js';
import { defineCustomElement as defineMHint } from '@modyo-dynamic/modyo-design-system/components/m-hint.js';
import { defineCustomElement as defineMIcon } from '@modyo-dynamic/modyo-design-system/components/m-icon.js';
import { defineCustomElement as defineMInput } from '@modyo-dynamic/modyo-design-system/components/m-input.js';
import { defineCustomElement as defineMInputCounter } from '@modyo-dynamic/modyo-design-system/components/m-input-counter.js';
import { defineCustomElement as defineMInputCurrencyBase } from '@modyo-dynamic/modyo-design-system/components/m-input-currency-base.js';
import { defineCustomElement as defineMInputPassword } from '@modyo-dynamic/modyo-design-system/components/m-input-password.js';
import { defineCustomElement as defineMInputSearch } from '@modyo-dynamic/modyo-design-system/components/m-input-search.js';
import { defineCustomElement as defineMInputSwitch } from '@modyo-dynamic/modyo-design-system/components/m-input-switch.js';
import { defineCustomElement as defineMListItem } from '@modyo-dynamic/modyo-design-system/components/m-list-item.js';
import { defineCustomElement as defineMModal } from '@modyo-dynamic/modyo-design-system/components/m-modal.js';
import { defineCustomElement as defineMOffcanvas } from '@modyo-dynamic/modyo-design-system/components/m-offcanvas.js';
import { defineCustomElement as defineMPin } from '@modyo-dynamic/modyo-design-system/components/m-pin.js';
import { defineCustomElement as defineMProgressBar } from '@modyo-dynamic/modyo-design-system/components/m-progress-bar.js';
import { defineCustomElement as defineMQuickAction } from '@modyo-dynamic/modyo-design-system/components/m-quick-action.js';
import { defineCustomElement as defineMSegmentControl } from '@modyo-dynamic/modyo-design-system/components/m-segment-control.js';
import { defineCustomElement as defineMSegmentControlItem } from '@modyo-dynamic/modyo-design-system/components/m-segment-control-item.js';
import { defineCustomElement as defineMSelect } from '@modyo-dynamic/modyo-design-system/components/m-select.js';
import { defineCustomElement as defineMShortcutToggle } from '@modyo-dynamic/modyo-design-system/components/m-shortcut-toggle.js';


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
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
export class MButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
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
  inputs: ['isButton', 'isChecked', 'isDisabled', 'isIndeterminate', 'label', 'mId', 'name', 'state', 'type', 'value']
})
@Component({
  selector: 'm-form-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isButton', 'isChecked', 'isDisabled', 'isIndeterminate', 'label', 'mId', 'name', 'state', 'type', 'value']
})
export class MFormCheck {
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
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'isLoading', 'loadingDuration', 'size', 'theme']
})
@Component({
  selector: 'm-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'isLoading', 'loadingDuration', 'size', 'theme']
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
  /**
   * Emitted when blur the input 
   */
  mFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input 
   */
  mWheel: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when click on the left icon 
   */
  mIconStartClick: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Emitted when click on the right icon 
   */
  mIconEndClick: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'type', 'value'],
  methods: ['focusInput', 'blurInput']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'type', 'value']
})
export class MInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mBlur', 'mFocus', 'mWheel', 'mIconStartClick', 'mIconEndClick']);
  }
}


export declare interface MInputCounter extends Components.MInputCounter {
  /**
   * Event for input change 
   */
  mChange: EventEmitter<CustomEvent<number>>;
  /**
   * Event for button pressed 
   */
  mClick: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInputCounter,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'value']
})
@Component({
  selector: 'm-input-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'value']
})
export class MInputCounter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mClick']);
  }
}


export declare interface MInputCurrencyBase extends Components.MInputCurrencyBase {
  /**
   * Emitted when the inputs change 
   */
  mChange: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInputCurrencyBase,
  inputs: ['currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-currency-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'placeholder', 'value']
})
export class MInputCurrencyBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputPassword extends Components.MInputPassword {
  /**
   * Emitted when the input value has changed 
   */
  mChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInputPassword,
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
export class MInputPassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputSearch extends Components.MInputSearch {
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
  defineCustomElementFn: defineMInputSearch,
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
export class MInputSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mClick']);
  }
}


export declare interface MInputSwitch extends Components.MInputSwitch {
  /**
   * Emitted when the switch has changed 
   */
  mChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInputSwitch,
  inputs: ['isChecked', 'isDisabled', 'label', 'mId', 'name']
})
@Component({
  selector: 'm-input-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isChecked', 'isDisabled', 'label', 'mId', 'name']
})
export class MInputSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
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
  inputs: ['alternativeValue', 'customActionClass', 'customActionEndIcon', 'customActionEndIconFamilyClass', 'customActionEndIconFamilyPrefix', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'isLoading', 'isPill', 'navegableProps', 'selectableProps', 'subtext', 'text', 'theme', 'themeValue', 'value', 'variant']
})
@Component({
  selector: 'm-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alternativeValue', 'customActionClass', 'customActionEndIcon', 'customActionEndIconFamilyClass', 'customActionEndIconFamilyPrefix', 'icon', 'iconFamilyClass', 'iconFamilyPrefix', 'image', 'isLoading', 'isPill', 'navegableProps', 'selectableProps', 'subtext', 'text', 'theme', 'themeValue', 'value', 'variant']
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
  inputs: ['closeText', 'fullScreenFrom', 'imageHeader', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton']
})
@Component({
  selector: 'm-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeText', 'fullScreenFrom', 'imageHeader', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton']
})
export class MModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MOffcanvas extends Components.MOffcanvas {
  /**
   * Emitted when the input value has changed 
   */
  mClose: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMOffcanvas,
  inputs: ['closeText', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton']
})
@Component({
  selector: 'm-offcanvas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeText', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton']
})
export class MOffcanvas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MPin extends Components.MPin {
  /**
   * Emitted when the inputs had changed 
   */
  mChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMPin,
  inputs: ['characters', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isSecret', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'placeholder', 'theme', 'type']
})
@Component({
  selector: 'm-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['characters', 'hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isSecret', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'placeholder', 'theme', 'type']
})
export class MPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MProgressBar extends Components.MProgressBar {}

@ProxyCmp({
  defineCustomElementFn: defineMProgressBar,
  inputs: ['classNameBar', 'classNameContainer', 'classNameProgress', 'currentValue', 'enableDarkMode', 'enableStripedAnimation', 'maxValue', 'minValue']
})
@Component({
  selector: 'm-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['classNameBar', 'classNameContainer', 'classNameProgress', 'currentValue', 'enableDarkMode', 'enableStripedAnimation', 'maxValue', 'minValue']
})
export class MProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  inputs: ['isChecked', 'isDisabled', 'label', 'mId', 'name', 'state', 'value']
})
@Component({
  selector: 'm-segment-control-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isChecked', 'isDisabled', 'label', 'mId', 'name', 'state', 'value']
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
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'name', 'options', 'selectedOption', 'theme', 'valueExtractor', 'variant']
})
@Component({
  selector: 'm-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'hintIconEnd', 'hintIconEndFamilyClass', 'hintIconEndFamilyPrefix', 'hintIconStart', 'hintIconStartFamilyClass', 'hintIconStartFamilyPrefix', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconMiddle', 'iconMiddleFamilyClass', 'iconMiddleFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'layoutDirection', 'mId', 'name', 'options', 'selectedOption', 'theme', 'valueExtractor', 'variant']
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
