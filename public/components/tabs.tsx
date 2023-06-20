import React, { useMemo } from 'react';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { EuiPageContentBody, EuiSpacer, EuiTabbedContent, EuiText } from '@elastic/eui';
import { AzurePage } from './azure-page';
import { AvailablePage } from './available-page';

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
        content: (
          <EuiPageContentBody paddingSize="l">
            <EuiSpacer size="xl" />
            Any Content
          </EuiPageContentBody>
        ),
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
        content: <AvailablePage />,
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
        content: (
          <EuiPageContentBody paddingSize="l">
            <EuiSpacer size="xl" />
            Any Content
          </EuiPageContentBody>
        ),
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
        content: (
          <EuiPageContentBody paddingSize="l">
            <EuiSpacer size="xl" />
            Any Content
          </EuiPageContentBody>
        ),
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
        content: (
          <EuiPageContentBody paddingSize="l">
            <EuiSpacer size="xl" />
            Any Content
          </EuiPageContentBody>
        ),
      },
    ],
    []
  );

  return (
    <I18nProvider>
      <EuiTabbedContent tabs={tabs} initialSelectedTab={tabs[0]} />
    </I18nProvider>
  );
};
