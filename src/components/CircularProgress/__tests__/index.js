import * as React from 'react';
import renderer from 'react-test-renderer';

import CircularProgress from '../';

describe('CircularProgress', () => {
  it('renders correctly by default', () => {
    const tree = renderer
      .create(
        <CircularProgress />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
