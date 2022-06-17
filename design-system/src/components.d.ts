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
import { FormCheckState, FormCheckType } from "./components/m-form-check/m-form-check-interface";
import { FormControlLayoutDirection } from "./components/m-input/m-input-interface";
import { ListItemVariant, NavegableProps, SelectableProps } from "./components/m-list-item/m-list-item-interface";
import { NavVariant } from "./components/m-nav/m-nav-interface";
import { NavegableProps as NavegableProps1, NavLinkVariant, OptionProps } from "./components/m-nav/m-nav-link/m-nav-link-interface";
import { FormControlLayoutDirection as FormControlLayoutDirection1, FormControlLayoutVariant } from "./components/m-select/m-select-interface";
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
          * The type of the button.
         */
        "type": ButtonType;
        /**
          * The value of the button.
         */
        "value": string;
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
    interface MFormCheck {
        /**
          * Set checkbox or radio button marked as selected or not
         */
        "checked": boolean;
        /**
          * Set input as disabled
         */
        "disabled": boolean;
        /**
          * Set view of checkbox as indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * Text that will be displayed beside Check input or Radio input
         */
        "label"?: string;
        /**
          * Form control identifier
         */
        "mId": string;
        /**
          * HTML Name to use within a form or JS reference
         */
        "name"?: string;
        /**
          * State of checkbox or radio. The states could be: Success state Error state Warning state Loading state
         */
        "state"?: FormCheckState;
        /**
          * Set whether is a checkbox input or a radio input
         */
        "type": FormCheckType;
        /**
          * A string representing the value of the checkbox or radio
         */
        "value"?: string;
    }
    interface MFormSwitch {
        /**
          * Flag to change the check state
         */
        "isChecked": boolean;
        /**
          * Flag to disable the input
         */
        "isDisabled": boolean;
        /**
          * The text to display in the switch.
         */
        "label": string;
        /**
          * The text to display when the switch is off.
         */
        "labelOff": string;
        /**
          * The text to display when the switch is on.
         */
        "labelOn": string;
        /**
          * Id
         */
        "mId": string;
    }
    interface MInput {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Icon to display on input left
         */
        "iconStart"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled": boolean;
        /**
          * The label text
         */
        "label": string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
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
    interface MListItem {
        /**
          * Alternative value
         */
        "alternativeValue"?: string | number;
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Url to replace the default icon image
         */
        "image": string | null;
        /**
          * Has borders rounded
         */
        "isPill": boolean;
        /**
          * Props for the list item navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the list item selectable variant
         */
        "selectableProps"?: SelectableProps;
        /**
          * Subtext of the list.
         */
        "subtext": string;
        /**
          * Main text of the list.
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * Value of the list
         */
        "value"?: string | number;
        /**
          * Variant for text item list or complete item list
         */
        "variant"?: ListItemVariant;
    }
    interface MNav {
        /**
          * Is aria orientation vertical
         */
        "isAriaVertical": boolean;
        /**
          * Variant of nav
         */
        "variant"?: NavVariant;
    }
    interface MNavContent {
    }
    interface MNavItem {
    }
    interface MNavLink {
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Is active nav link
         */
        "isActive": boolean;
        /**
          * Is disabled nav link
         */
        "isDisabled": boolean;
        /**
          * Props for the nav link navegable variant
         */
        "navegableProps"?: NavegableProps1;
        /**
          * Props for the nav link option variant
         */
        "optionProps"?: OptionProps;
        /**
          * Text of nav link
         */
        "text": string;
        /**
          * Variant of nav link
         */
        "variant": NavLinkVariant;
    }
    interface MNavPane {
        /**
          * Is the current active nav-pane
         */
        "isActive": boolean;
        /**
          * Id of the nav-pane
         */
        "mId": string;
        /**
          * Tab Index of the nav-pane
         */
        "mTabindex"?: number;
        /**
          * Role of the nav-pane
         */
        "role": string;
    }
    interface MSelect {
        /**
          * The hint of the select in full variant
         */
        "hint"?: string;
        /**
          * The hint icon for the select in full variant
         */
        "hintIcon"?: string;
        /**
          * The end icon for the select
         */
        "iconEnd"?: string;
        /**
          * The middle icon for the select
         */
        "iconMiddle"?: string;
        /**
          * The start icon for the select
         */
        "iconStart"?: string;
        /**
          * The label of the select in full variant
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of select
         */
        "layoutDirection": FormControlLayoutDirection1;
        /**
          * Id of the select
         */
        "mId": string;
        /**
          * The theme of the select
         */
        "theme": string;
        /**
          * The variant of the select
         */
        "variant": FormControlLayoutVariant;
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
    interface HTMLMFormCheckElement extends Components.MFormCheck, HTMLStencilElement {
    }
    var HTMLMFormCheckElement: {
        prototype: HTMLMFormCheckElement;
        new (): HTMLMFormCheckElement;
    };
    interface HTMLMFormSwitchElement extends Components.MFormSwitch, HTMLStencilElement {
    }
    var HTMLMFormSwitchElement: {
        prototype: HTMLMFormSwitchElement;
        new (): HTMLMFormSwitchElement;
    };
    interface HTMLMInputElement extends Components.MInput, HTMLStencilElement {
    }
    var HTMLMInputElement: {
        prototype: HTMLMInputElement;
        new (): HTMLMInputElement;
    };
    interface HTMLMListItemElement extends Components.MListItem, HTMLStencilElement {
    }
    var HTMLMListItemElement: {
        prototype: HTMLMListItemElement;
        new (): HTMLMListItemElement;
    };
    interface HTMLMNavElement extends Components.MNav, HTMLStencilElement {
    }
    var HTMLMNavElement: {
        prototype: HTMLMNavElement;
        new (): HTMLMNavElement;
    };
    interface HTMLMNavContentElement extends Components.MNavContent, HTMLStencilElement {
    }
    var HTMLMNavContentElement: {
        prototype: HTMLMNavContentElement;
        new (): HTMLMNavContentElement;
    };
    interface HTMLMNavItemElement extends Components.MNavItem, HTMLStencilElement {
    }
    var HTMLMNavItemElement: {
        prototype: HTMLMNavItemElement;
        new (): HTMLMNavItemElement;
    };
    interface HTMLMNavLinkElement extends Components.MNavLink, HTMLStencilElement {
    }
    var HTMLMNavLinkElement: {
        prototype: HTMLMNavLinkElement;
        new (): HTMLMNavLinkElement;
    };
    interface HTMLMNavPaneElement extends Components.MNavPane, HTMLStencilElement {
    }
    var HTMLMNavPaneElement: {
        prototype: HTMLMNavPaneElement;
        new (): HTMLMNavPaneElement;
    };
    interface HTMLMSelectElement extends Components.MSelect, HTMLStencilElement {
    }
    var HTMLMSelectElement: {
        prototype: HTMLMSelectElement;
        new (): HTMLMSelectElement;
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
        "m-form-check": HTMLMFormCheckElement;
        "m-form-switch": HTMLMFormSwitchElement;
        "m-input": HTMLMInputElement;
        "m-list-item": HTMLMListItemElement;
        "m-nav": HTMLMNavElement;
        "m-nav-content": HTMLMNavContentElement;
        "m-nav-item": HTMLMNavItemElement;
        "m-nav-link": HTMLMNavLinkElement;
        "m-nav-pane": HTMLMNavPaneElement;
        "m-select": HTMLMSelectElement;
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
          * Emitted when the button has been clicked.
         */
        "onMClick"?: (event: CustomEvent<any>) => void;
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
          * The type of the button.
         */
        "type"?: ButtonType;
        /**
          * The value of the button.
         */
        "value"?: string;
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
    interface MFormCheck {
        /**
          * Set checkbox or radio button marked as selected or not
         */
        "checked"?: boolean;
        /**
          * Set input as disabled
         */
        "disabled"?: boolean;
        /**
          * Set view of checkbox as indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * Text that will be displayed beside Check input or Radio input
         */
        "label"?: string;
        /**
          * Form control identifier
         */
        "mId": string;
        /**
          * HTML Name to use within a form or JS reference
         */
        "name"?: string;
        /**
          * State of checkbox or radio. The states could be: Success state Error state Warning state Loading state
         */
        "state"?: FormCheckState;
        /**
          * Set whether is a checkbox input or a radio input
         */
        "type": FormCheckType;
        /**
          * A string representing the value of the checkbox or radio
         */
        "value"?: string;
    }
    interface MFormSwitch {
        /**
          * Flag to change the check state
         */
        "isChecked"?: boolean;
        /**
          * Flag to disable the input
         */
        "isDisabled"?: boolean;
        /**
          * The text to display in the switch.
         */
        "label": string;
        /**
          * The text to display when the switch is off.
         */
        "labelOff"?: string;
        /**
          * The text to display when the switch is on.
         */
        "labelOn"?: string;
        /**
          * Id
         */
        "mId": string;
        /**
          * Emitted when the switch has changed
         */
        "onMChange"?: (event: CustomEvent<boolean>) => void;
    }
    interface MInput {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Icon to display on input left
         */
        "iconStart"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled"?: boolean;
        /**
          * The label text
         */
        "label"?: string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
        /**
          * Emitted when the input value has changed
         */
        "onMChange"?: (event: CustomEvent<string>) => void;
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
    interface MListItem {
        /**
          * Alternative value
         */
        "alternativeValue"?: string | number;
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Url to replace the default icon image
         */
        "image"?: string | null;
        /**
          * Has borders rounded
         */
        "isPill"?: boolean;
        /**
          * Props for the list item navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the list item selectable variant
         */
        "selectableProps"?: SelectableProps;
        /**
          * Subtext of the list.
         */
        "subtext"?: string;
        /**
          * Main text of the list.
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * Value of the list
         */
        "value"?: string | number;
        /**
          * Variant for text item list or complete item list
         */
        "variant"?: ListItemVariant;
    }
    interface MNav {
        /**
          * Is aria orientation vertical
         */
        "isAriaVertical"?: boolean;
        /**
          * Variant of nav
         */
        "variant"?: NavVariant;
    }
    interface MNavContent {
    }
    interface MNavItem {
    }
    interface MNavLink {
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Is active nav link
         */
        "isActive"?: boolean;
        /**
          * Is disabled nav link
         */
        "isDisabled"?: boolean;
        /**
          * Props for the nav link navegable variant
         */
        "navegableProps"?: NavegableProps1;
        /**
          * Props for the nav link option variant
         */
        "optionProps"?: OptionProps;
        /**
          * Text of nav link
         */
        "text": string;
        /**
          * Variant of nav link
         */
        "variant"?: NavLinkVariant;
    }
    interface MNavPane {
        /**
          * Is the current active nav-pane
         */
        "isActive"?: boolean;
        /**
          * Id of the nav-pane
         */
        "mId": string;
        /**
          * Tab Index of the nav-pane
         */
        "mTabindex"?: number;
        /**
          * Role of the nav-pane
         */
        "role"?: string;
    }
    interface MSelect {
        /**
          * The hint of the select in full variant
         */
        "hint"?: string;
        /**
          * The hint icon for the select in full variant
         */
        "hintIcon"?: string;
        /**
          * The end icon for the select
         */
        "iconEnd"?: string;
        /**
          * The middle icon for the select
         */
        "iconMiddle"?: string;
        /**
          * The start icon for the select
         */
        "iconStart"?: string;
        /**
          * The label of the select in full variant
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of select
         */
        "layoutDirection"?: FormControlLayoutDirection1;
        /**
          * Id of the select
         */
        "mId": string;
        /**
          * Emitted when the select value has changed
         */
        "onMChange"?: (event: CustomEvent<string>) => void;
        /**
          * The theme of the select
         */
        "theme"?: string;
        /**
          * The variant of the select
         */
        "variant"?: FormControlLayoutVariant;
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
        "m-form-check": MFormCheck;
        "m-form-switch": MFormSwitch;
        "m-input": MInput;
        "m-list-item": MListItem;
        "m-nav": MNav;
        "m-nav-content": MNavContent;
        "m-nav-item": MNavItem;
        "m-nav-link": MNavLink;
        "m-nav-pane": MNavPane;
        "m-select": MSelect;
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
            "m-form-check": LocalJSX.MFormCheck & JSXBase.HTMLAttributes<HTMLMFormCheckElement>;
            "m-form-switch": LocalJSX.MFormSwitch & JSXBase.HTMLAttributes<HTMLMFormSwitchElement>;
            "m-input": LocalJSX.MInput & JSXBase.HTMLAttributes<HTMLMInputElement>;
            "m-list-item": LocalJSX.MListItem & JSXBase.HTMLAttributes<HTMLMListItemElement>;
            "m-nav": LocalJSX.MNav & JSXBase.HTMLAttributes<HTMLMNavElement>;
            "m-nav-content": LocalJSX.MNavContent & JSXBase.HTMLAttributes<HTMLMNavContentElement>;
            "m-nav-item": LocalJSX.MNavItem & JSXBase.HTMLAttributes<HTMLMNavItemElement>;
            "m-nav-link": LocalJSX.MNavLink & JSXBase.HTMLAttributes<HTMLMNavLinkElement>;
            "m-nav-pane": LocalJSX.MNavPane & JSXBase.HTMLAttributes<HTMLMNavPaneElement>;
            "m-select": LocalJSX.MSelect & JSXBase.HTMLAttributes<HTMLMSelectElement>;
            "m-text": LocalJSX.MText & JSXBase.HTMLAttributes<HTMLMTextElement>;
        }
    }
}
