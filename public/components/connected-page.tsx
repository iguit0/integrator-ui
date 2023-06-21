import React, { useState } from 'react';
import { EuiFormRow, EuiPageContentBody, EuiSelect, EuiSpacer } from '@elastic/eui';

export const ConnectedPage = () => {
  const logSourcesOptions = [
    { value: undefined, text: 'Select' },
    { value: 'log1', text: 'Source A' },
    { value: 'log2', text: 'Source B' },
    { value: 'log3', text: 'Source C' },
  ];

  const subTypeOptions = [
    { value: undefined, text: 'Select' },
    { value: 'sub1', text: 'Subtype A' },
    { value: 'sub2', text: 'Subtype B' },
    { value: 'sub3', text: 'Subtype C' },
  ];

  const [logSource, setLogSource] = useState<string>();
  const [subType, setSubtype] = useState<string>();

  const onChangeLogSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLogSource(e.target.value);
  };

  const onChangeSubtype = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubtype(e.target.value);
  };

  return (
    <EuiPageContentBody paddingSize="l">
      <EuiSpacer size="xl" />

      <EuiFormRow label="Select your log source" hasChildLabel={false}>
        <EuiSelect
          id="log-source-select"
          placeholder="Select your log source"
          options={logSourcesOptions}
          value={logSource}
          onChange={(e) => onChangeLogSource(e)}
          aria-label="Log source select"
        />
      </EuiFormRow>

      <EuiSpacer size="l" />

      <EuiFormRow label="Select a sub-type" hasChildLabel={false}>
        <EuiSelect
          id="sub-type-select"
          placeholder="Select your sub-type"
          options={subTypeOptions}
          value={subType}
          onChange={(e) => onChangeSubtype(e)}
          aria-label="Sub type select"
        />
      </EuiFormRow>
    </EuiPageContentBody>
  );
};
