import React, { useState } from 'react';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { EuiPage, EuiPageBody, EuiPageHeader, EuiTitle } from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';
import { TabsList } from './tabs';

interface IntegratorUiAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}

export const IntegratorUiApp = ({ basename, navigation }: IntegratorUiAppDeps) => {
  return (
    <Router basename={basename}>
      <I18nProvider>
        <navigation.ui.TopNavMenu
          appName={PLUGIN_ID}
          showSearchBar={false}
          useDefaultBehaviors={true}
        />
        <EuiPage restrictWidth="1000px">
          <EuiPageBody panelled component="main">
            <EuiPageHeader>
              <EuiTitle size="l">
                <h1>
                  <FormattedMessage
                    id="integratorUi.helloWorldText"
                    defaultMessage="{name}"
                    values={{ name: PLUGIN_NAME }}
                  />
                </h1>
              </EuiTitle>
            </EuiPageHeader>

            <TabsList />
          </EuiPageBody>
        </EuiPage>
      </I18nProvider>
    </Router>
  );
};
