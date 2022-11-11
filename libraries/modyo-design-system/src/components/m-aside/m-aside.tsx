import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

import { prefixBS } from '../../utils/component-interface';

import { PositionToggleFrom } from './m-aside-interface';

@Component({
  tag: 'm-aside',
  styleUrl: 'm-aside.scss',
  shadow: false,
})
export class MAside {
  @Element() el!: HTMLMAsideElement;

  /**
   * the name of the aside
   */
  @Prop() name!: string;

  /**
   * Close button text
   */
  @Prop() closeText?: string;

  /**
   * Is backdrop static
   */
  @Prop() static?: boolean;

  /**
   * Is aside scrollable
   */
  @Prop() scrollable?: boolean;

  /**
   * No display close button
   */
  @Prop() showCloseButton?: boolean;

  /**
   * Position to show aside from
   */
  @Prop() openFrom: PositionToggleFrom = 'start';

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClose' }) mClose!: EventEmitter<void>;

  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }

  private header!: boolean;
  private body!: boolean;
  private footer!: boolean;

  private closeHandler = () => {
    this.mClose.emit();
  };

  render() {
    return (
      <div
        class={`offcanvas offcanvas-${this.openFrom} show`}
        id={this.name}
        tabindex="-1"
        aria-labelledby={`${this.name}Label`}
        aria-hidden="false"
        {...this.static && ({
          [`data-${prefixBS}backdrop`]: 'static',
          [`data-${prefixBS}keyboard`]: 'false',
        })}
      >

        {this.header && (
        <div
          class="offcanvas-header"
        >
          <slot name="header" />
          {this.showCloseButton && (
          <button
            type="button"
            class={{
              'btn-close': !this.closeText,
              'btn-close-text': !!this.closeText,
            }}
            aria-label="Close"
            onClick={this.closeHandler}
          >
            {this.closeText && (this.closeText)}
          </button>
          )}
        </div>
        )}
        {this.body && (
        <div class="offcanvas-body">
          <slot name="body" />
        </div>
        )}
        {this.footer && (
        <div class="offcanvas-footer">
          <slot name="footer" />
        </div>
        )}
      </div>
    );
  }
}
