import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getCardToPay = createDraftSafeSelector(
  getState,
  (widget) => widget.cardToPay,
);

export const getSelectedCurrency = createDraftSafeSelector(
  getState,
  (widget) => widget.selectedCurrency,
);

export const getAccounts = createDraftSafeSelector(
  getState,
  getSelectedCurrency,
  (widget, selectedCurrency) => widget.accounts.filter(
    (account) => account.currency === selectedCurrency,
  ),
);

export const getCurrencies = createDraftSafeSelector(
  // TODO
  () => false,
);

export const getAccountSelected = createDraftSafeSelector(
  getState,
  (widget) => widget.accountSelected,
);

export const getAmountUsed = createDraftSafeSelector(
  getState,
  (widget) => widget.amountUsed,
);

export const getIsPaid = createDraftSafeSelector(
  getState,
  (widget) => widget.isPaid,
);

export const getSchedule = createDraftSafeSelector(
  getState,
  (widget) => widget.schedule,
);

export const getRecurring = createDraftSafeSelector(
  getState,
  (widget) => widget.recurring,
);

export const getResult = createDraftSafeSelector(
  getState,
  (widget) => widget.result,
);

export const getUser = createDraftSafeSelector(
  getState,
  (widget) => widget.user,
);
