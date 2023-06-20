import React, { useState } from 'react';
import {
  EuiSpacer,
  EuiImage,
  EuiPageContentBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiFormRow,
  EuiSwitch,
  EuiPanel,
  EuiCard,
  EuiFlexGrid,
  EuiButton,
} from '@elastic/eui';

type ItemProps = {
  id: number | string;
  label: string;
  image?: string;
};

interface SwitchStates {
  [itemId: ItemProps['id']]: boolean;
}

export const AzurePage = () => {
  const [switchStates, setSwitchStates] = useState<SwitchStates>({});

  const handleSwitchChange = (itemId: ItemProps['id']) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const Item = ({ id, label, image }: ItemProps) => {
    return (
      <EuiFlexItem key={id}>
        <EuiSpacer size="m" />
        <EuiFlexGroup gutterSize="l" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiImage size="s" alt="Windows Logo" url={image || ''} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText size="xs">{label}</EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSwitch
              checked={switchStates[id] || false}
              onChange={() => handleSwitchChange(id)}
              showLabel={false}
              label="Enable"
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton fill>Manage</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="l" />
      </EuiFlexItem>
    );
  };

  // TODO: Refactor this, use constants, etc.
  const msItems = [
    {
      id: 1,
      title: 'Microsoft Office 365',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png',
    },
    {
      id: 2,
      title: 'Azure Active Directory',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png',
    },
    {
      id: 3,
      title: 'Windows Defender',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png',
    },
  ];

  return (
    <EuiPageContentBody paddingSize="l">
      <EuiSpacer size="xl" />

      <EuiFlexGroup direction="column">
        {msItems.map((item) => (
          <Item id={item.id} label={item.title} image={item.image} key={item.id} />
        ))}
      </EuiFlexGroup>
    </EuiPageContentBody>
  );
};
