import React from 'react';

import { storiesOf } from '@storybook/react';
import ExternalComponent from "@lerna-storybook-demo/external-component";

storiesOf('External Component', module)
  .add('default', () => <ExternalComponent />)
