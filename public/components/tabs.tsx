import React, { useMemo } from 'react';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { EuiTabbedContent, EuiText } from '@elastic/eui';
import { AzurePage } from './azure-page';

export const TabsList = () => {
  const tabs = useMemo(
    () => [
      {
        id: 'tab-connected',
        name: (
          <FormattedMessage
            id="integratorUi.connected.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'Connected' }}
          />
        ),
        content: <>Connected</>,
      },
      {
        id: 'tab-available',
        name: (
          <FormattedMessage
            id="integratorUi.available.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'Available' }}
          />
        ),
        content: <EuiText>Available</EuiText>,
      },
      {
        id: 'tab-azure',
        name: (
          <FormattedMessage
            id="integratorUi.azure.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'Azure' }}
          />
        ),
        content: <AzurePage />,
      },
      {
        id: 'tab-aws',
        name: (
          <FormattedMessage
            id="integratorUi.aws.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'AWS' }}
          />
        ),
        content: <>AWS</>,
      },
      {
        id: 'tab-windows',
        name: (
          <FormattedMessage
            id="integratorUi.windows.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'Windows' }}
          />
        ),
        content: <EuiText>Windows</EuiText>,
      },
      {
        id: 'tab-firewall',
        name: (
          <FormattedMessage
            id="integratorUi.firewall.TabTitle"
            defaultMessage="{name}"
            values={{ name: 'Firewall' }}
          />
        ),
        content: <EuiText>Firewall</EuiText>,
      },
    ],
    []
  );

  return (
    <I18nProvider>
      <EuiTabbedContent tabs={tabs} initialSelectedTab={tabs[2]} />
    </I18nProvider>
  );
};
