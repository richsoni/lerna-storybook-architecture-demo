import React from 'react';

import { storiesOf } from '@storybook/react';
import ExternalComponent from "../../packages/external-component/dist/index.es";

storiesOf('External Component', module)
  .add('default', () => <ExternalComponent />)
