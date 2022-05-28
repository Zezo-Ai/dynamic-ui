/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAction } from "./components/m-alert/m-alert-interface";
import { ButtonType, ButtonVariant } from "./components/m-button/m-button-interface";
import { InputState } from "./utils/component-interface";
export namespace Components {
    interface MAlert {
        /**
          * the action buttons
         */
        "actions": AlertAction[];
        /**
          * the body of alert render on top of the slot
         */
        "body": string;
        /**
          * The header text
         */
        "header": string;
        /**
          * The theme to use.
         */
        "theme": string;
    }
    interface MAlertAction {
        /**
          * The action to perform when the button is clicked.
         */
        "action": AlertAction;
    }
    interface MApp {
    }
    interface MBadge {
        /**
          * The text of badge
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme": string;
    }
    interface MButton {
        /**
          * Flag to switch to pill button border radius.
         */
        "isPill": boolean;
        /**
          * The type of the button.
         */
        "mType": ButtonType;
        /**
          * The value of the button.
         */
        "mValue": string;
        /**
          * Flag to set the button as active.
         */
        "state"?: InputState;
        /**
          * The text to display.
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme": string;
        /**
          * The variant to use.
         */
        "variant"?: ButtonVariant;
    }
    interface MCard {
        /**
          * The header text
         */
        "header"?: string;
        /**
          * The theme to use
         */
        "theme": string;
    }
    interface MInput {
        /**
          * Flag to disable the input
         */
        "disabled": boolean;
        /**
          * The label text
         */
        "label": string;
        /**
          * The id of the input
         */
        "modId": string;
        /**
          * The placeholder text
         */
        "placeholder": string;
        /**
          * The type of the input
         */
        "type": string;
        /**
          * The value of the input
         */
        "value": string;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme": string;
    }
}
declare global {
    interface HTMLMAlertElement extends Components.MAlert, HTMLStencilElement {
    }
    var HTMLMAlertElement: {
        prototype: HTMLMAlertElement;
        new (): HTMLMAlertElement;
    };
    interface HTMLMAlertActionElement extends Components.MAlertAction, HTMLStencilElement {
    }
    var HTMLMAlertActionElement: {
        prototype: HTMLMAlertActionElement;
        new (): HTMLMAlertActionElement;
    };
    interface HTMLMAppElement extends Components.MApp, HTMLStencilElement {
    }
    var HTMLMAppElement: {
        prototype: HTMLMAppElement;
        new (): HTMLMAppElement;
    };
    interface HTMLMBadgeElement extends Components.MBadge, HTMLStencilElement {
    }
    var HTMLMBadgeElement: {
        prototype: HTMLMBadgeElement;
        new (): HTMLMBadgeElement;
    };
    interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {
    }
    var HTMLMButtonElement: {
        prototype: HTMLMButtonElement;
        new (): HTMLMButtonElement;
    };
    interface HTMLMCardElement extends Components.MCard, HTMLStencilElement {
    }
    var HTMLMCardElement: {
        prototype: HTMLMCardElement;
        new (): HTMLMCardElement;
    };
    interface HTMLMInputElement extends Components.MInput, HTMLStencilElement {
    }
    var HTMLMInputElement: {
        prototype: HTMLMInputElement;
        new (): HTMLMInputElement;
    };
    interface HTMLMTextElement extends Components.MText, HTMLStencilElement {
    }
    var HTMLMTextElement: {
        prototype: HTMLMTextElement;
        new (): HTMLMTextElement;
    };
    interface HTMLElementTagNameMap {
        "m-alert": HTMLMAlertElement;
        "m-alert-action": HTMLMAlertActionElement;
        "m-app": HTMLMAppElement;
        "m-badge": HTMLMBadgeElement;
        "m-button": HTMLMButtonElement;
        "m-card": HTMLMCardElement;
        "m-input": HTMLMInputElement;
        "m-text": HTMLMTextElement;
    }
}
declare namespace LocalJSX {
    interface MAlert {
        /**
          * the action buttons
         */
        "actions"?: AlertAction[];
        /**
          * the body of alert render on top of the slot
         */
        "body"?: string;
        /**
          * The header text
         */
        "header"?: string;
        /**
          * Emitted when the action button is clicked.
         */
        "onModActionClick"?: (event: CustomEvent<AlertAction>) => void;
        /**
          * The theme to use.
         */
        "theme"?: string;
    }
    interface MAlertAction {
        /**
          * The action to perform when the button is clicked.
         */
        "action": AlertAction;
        /**
          * Emitted when the action button is clicked.
         */
        "onModClick"?: (event: CustomEvent<AlertAction>) => void;
    }
    interface MApp {
    }
    interface MBadge {
        /**
          * The text of badge
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
    }
    interface MButton {
        /**
          * Flag to switch to pill button border radius.
         */
        "isPill"?: boolean;
        /**
          * The type of the button.
         */
        "mType"?: ButtonType;
        /**
          * The value of the button.
         */
        "mValue"?: string;
        /**
          * Emitted when the button has been clicked.
         */
        "onMButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * Flag to set the button as active.
         */
        "state"?: InputState;
        /**
          * The text to display.
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * The variant to use.
         */
        "variant"?: ButtonVariant;
    }
    interface MCard {
        /**
          * The header text
         */
        "header"?: string;
        /**
          * The theme to use
         */
        "theme"?: string;
    }
    interface MInput {
        /**
          * Flag to disable the input
         */
        "disabled"?: boolean;
        /**
          * The label text
         */
        "label"?: string;
        /**
          * The id of the input
         */
        "modId"?: string;
        /**
          * Emitted when the input value has changed
         */
        "onModChange"?: (event: CustomEvent<string>) => void;
        /**
          * The placeholder text
         */
        "placeholder"?: string;
        /**
          * The type of the input
         */
        "type"?: string;
        /**
          * The value of the input
         */
        "value"?: string;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme"?: string;
    }
    interface IntrinsicElements {
        "m-alert": MAlert;
        "m-alert-action": MAlertAction;
        "m-app": MApp;
        "m-badge": MBadge;
        "m-button": MButton;
        "m-card": MCard;
        "m-input": MInput;
        "m-text": MText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-alert": LocalJSX.MAlert & JSXBase.HTMLAttributes<HTMLMAlertElement>;
            "m-alert-action": LocalJSX.MAlertAction & JSXBase.HTMLAttributes<HTMLMAlertActionElement>;
            "m-app": LocalJSX.MApp & JSXBase.HTMLAttributes<HTMLMAppElement>;
            "m-badge": LocalJSX.MBadge & JSXBase.HTMLAttributes<HTMLMBadgeElement>;
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-card": LocalJSX.MCard & JSXBase.HTMLAttributes<HTMLMCardElement>;
            "m-input": LocalJSX.MInput & JSXBase.HTMLAttributes<HTMLMInputElement>;
            "m-text": LocalJSX.MText & JSXBase.HTMLAttributes<HTMLMTextElement>;
        }
    }
}
