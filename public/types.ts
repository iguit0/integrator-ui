import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface IntegratorUiPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IntegratorUiPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
