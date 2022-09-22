/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useState } from 'react';
import {
  MButton,
  MFormSwitch,
  MShortcutToggle,
  MAlert,
  MCurrency,
  MHint,
  useFormatCurrency,
  useModalContext,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { DateTime } from 'luxon';
import { toast } from 'react-toastify';
import usePaymentInput from '../hooks/usePaymentInput';
import { useAppSelector } from '../store/hooks';
import {
  getAccountSelected,
  getAutoRepeat,
  getDebt,
  getSchedule,
  getSelectedCurrency,
  getUser,
} from '../store/selectors';

export default function PaymentPanel() {
  const { t } = useTranslation();
  const { openModal } = useModalContext();
  const accountSelected = useAppSelector(getAccountSelected);
  const schedule = useAppSelector(getSchedule);
  const recurringStart = useAppSelector(getAutoRepeat);
  const user = useAppSelector(getUser);
  const debt = useAppSelector(getDebt);
  const selectedCurrency = useAppSelector(getSelectedCurrency);
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const isPaypal = useMemo(() => accountSelected?.type === 'Paypal', [accountSelected]);

  const {
    amountAvailable,
    amount,
    setAmount,
  } = usePaymentInput(accountSelected?.value);
  const [isScheduled, setIsScheduled] = useState(false);
  const [shortcut, setShortcut] = useState('');

  const {
    format,
    values: [
      minimumPayment,
      totalPayment,
    ],
  } = useFormatCurrency(
    debt.minimumPayment,
    debt.totalPayment,
  );

  const paySameCurrency = useMemo(
    () => selectedCurrency === accountSelected?.currency,
    [selectedCurrency, accountSelected],
  );

  const setSelectedOption = ({ detail }: CustomEvent<string>, value: number) => {
    setShortcut(detail);
    setAmount(value);
  };

  const buttonPaymentAmountMessage = useMemo(() => {
    if (isPaypal) {
      return t('button.payPaypal');
    }
    if (user.canPayWithoutDebt) {
      return t('button.back');
    }
    if (isScheduled) {
      return t('button.schedule');
    }
    if (!amount) {
      return t('button.pay');
    }
    return t('button.payAmount', { amount: format(amount ?? 0) });
  }, [isScheduled, amount, t, format, user, isPaypal]);

  const alertMessageSchedule = useMemo(() => {
    if (!schedule) {
      return '';
    }
    if (isScheduled && recurringStart.enabled) {
      return t('alert.scheduleAndRecurring', { amount: format(amount ?? 0), date: DateTime.fromISO(schedule.date).toFormat('MM/dd/yy, HH:mm'), repeatType: recurringStart.frequency });
    }
    return t('alert.schedule', { amount: format(amount ?? 0), date: DateTime.fromISO(schedule.date).toFormat('MM/dd/yy, HH:mm') });
  }, [amount, schedule, isScheduled, recurringStart, t, format]);

  const hintCurrency = useMemo(() => {
    if (amount && amount > debt.totalPayment) {
      return {
        message: 'You are paying more than the billed amount',
        icon: 'emoji-smile',
      };
    }
    if (amount && accountSelected && amount > accountSelected?.value) {
      return {
        message: 'You don’t have enough funds to pay this amount',
        icon: 'emoji-smile',
      };
    }
    if (amount === 0) {
      return {
        message: 'Enter an amount to pay',
        icon: 'info-circle',
      };
    }
    return {
      message: '',
      icon: '',
    };
  }, [accountSelected, amount, debt]);

  useEffect(() => {
    if (isScheduled) {
      toast(({ closeToast }) => (
        <MAlert
          theme="info"
          close
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          onMClose={closeToast}
        >
          {alertMessageSchedule}
        </MAlert>
      ));
    }
  }, [isScheduled, alertMessageSchedule]);

  if (!accountSelected) {
    return (null);
  }

  return (
    <>
      <div className="pt-4">
        <div className="d-flex flex-column justify-content-between pb-2 mx-auto amount-options">
          <p className="px-3 mb-1 text-gray fw-semibold">Amount</p>
          <MShortcutToggle
            class="d-block"
            key="1"
            {...debt.minimumPayment === 0 && { state: 'disabled' }}
            {...debt.minimumPayment === amount && { isChecked: true }}
            mId="minimumOption"
            name="paymentOption"
            label={t('shortCutToggle.minimum')}
            text={minimumPayment}
            {...!paySameCurrency && {
              subtext: `(${accountSelected.currency} ${debt.minimumPayment * 1.02})`,
            }}
            value="minimumOption"
            onMChange={(e: CustomEvent<string>) => setSelectedOption(e, debt.minimumPayment)}
          />
          <MShortcutToggle
            class="d-block"
            key="2"
            {...debt.totalPayment === 0 && { state: 'disabled' }}
            {...debt.totalPayment === amount && { isChecked: true }}
            {...!paySameCurrency && {
              subtext: `(${accountSelected.currency} ${debt.totalPayment * 1.02})`,
            }}
            mId="totalOption"
            name="paymentOption"
            label={t('shortCutToggle.total')}
            text={totalPayment}
            value="totalOption"
            onMChange={(e: CustomEvent<string>) => setSelectedOption(e, debt.totalPayment)}
          />
          {
            user.canPayOtherAmount && (
              <>
                <MShortcutToggle
                  className={
                    shortcut !== 'otherAmount' ? 'd-block' : 'd-none'
                  }
                  key="3"
                  {...debt.totalPayment === 0 && { state: 'disabled' }}
                  mId="otherAmountOption"
                  name="paymentOption"
                  label={t('shortCutToggle.other')}
                  text={t('shortCutToggle.amount')}
                  value="otherAmount"
                  onMChange={(e: CustomEvent<string>) => setSelectedOption(e, 0)}
                />
                <MCurrency
                  className={
                    shortcut === 'otherAmount' ? 'd-block m-2' : 'd-none'
                  }
                  mId="debtInput"
                  theme="info"
                  selectOptions={!paySameCurrency ? [
                    { value: accountSelected.currency, label: accountSelected.currency },
                  ] : []}
                  placeholder={t('currencyInput.placeholder')}
                  iconLabel="currency-dollar"
                  hint={hintCurrency.message}
                  hintIconStart={hintCurrency.icon}
                  minValue={debt.minimumPayment}
                  maxValue={accountSelected?.value}
                  onMChange={({ detail: { amount: value } }) => setAmount(value as number)}
                  value={amount ?? debt.minimumPayment}
                  currencyOptions={{
                    symbol: '$',
                    precision: 2,
                    separator: ',',
                    decimal: '.',
                  }}
                />
              </>
            )
          }
          {(
            (shortcut === 'totalOption' && accountSelected?.value < debt.totalPayment)
            || (shortcut === 'minimumOption' && accountSelected?.value < debt.minimumPayment)
          ) && (
          <MHint
            text="You don’t have enough funds to pay this amount"
            iconStart="info-circle"
            theme="danger"
          />
          )}
          {user.hasPaymentAlternatives && (
            <MShortcutToggle
              class="d-block"
              key="4"
              mId="alternativeOption"
              name="paymentOption"
              label={t('shortCutToggle.paymentAlternatives')}
              text="..."
              {...debt.minimumPayment === 0 && { state: 'disabled' }}
              value="alternativeOption"
              onMChange={({ detail }: CustomEvent<string>) => {
                setShortcut(detail);
                if (debt.minimumPayment > 0) {
                  openModal('paymentAlternatives');
                }
              }}
              white
            />
          )}
        </div>
      </div>
      <div className="pb-4 text-center">
        <div
          className={toggleCollapse && amount && amount >= debt.minimumPayment ? '' : 'd-none'}
          id="moreOptions"
        >
          <div
            className="px-3 py-2 border rounded-1 mb-2"
            onClick={() => openModal('schedule', { payload: { onAccept: setIsScheduled } })}
            onKeyDown={() => { }}
            tabIndex={0}
            role="button"
          >
            <MFormSwitch
              class="d-inline-flex"
              mId="schedulePayment"
              label={t('collapse.schedule')}
              isDisabled
              isChecked={isScheduled}
              labelOn={t('collapse.yesLabel')}
              labelOff={t('collapse.noLabel')}
            />
            <small
              className="d-block text-info text-start"
            >
              {isScheduled && schedule
                ? t('collapse.yesScheduleLabel', { date: DateTime.fromISO(schedule.date).toFormat('MM/dd/yy, HH:mm') })
                : t('collapse.noScheduleLabel')}
            </small>
          </div>
        </div>
        <MButton
          className={`more-options-btn ${(!amount || amount < debt.minimumPayment) ? 'pe-none' : ''}`}
          variant="text"
          theme="info"
          text={t('collapse.options')}
          iconRight="chevron-down"
          onClick={() => setToggleCollapse((toggle) => !toggle)}
          {...(!amount || amount < debt.minimumPayment) && {
            state: 'disabled',
          }}
        />
      </div>
      <div
        className="d-flex justify-content-center"
      >
        <MButton
          {...(debt.minimumPayment === 0 || !amount || amountAvailable < 0 || amount < debt.minimumPayment) && !user.canPayWithoutDebt && { state: 'disabled' }}
          text={buttonPaymentAmountMessage}
          className="payment-button"
          isPill
          theme={isPaypal ? 'secondary-gradient' : 'primary-gradient'}
          {...isPaypal
            ? { iconLeft: 'paypal' }
            : { iconRight: 'check-lg' }
          }
          onClick={() => {
            if ((debt.minimumPayment > 0 && amount && amountAvailable >= 0)) {
              openModal('confirmPayment');
            }
          }}
        />
      </div>
    </>
  );
}
