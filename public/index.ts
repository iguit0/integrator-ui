import './index.scss';

import { IntegratorUiPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new IntegratorUiPlugin();
}
export { IntegratorUiPluginSetup, IntegratorUiPluginStart } from './types';
