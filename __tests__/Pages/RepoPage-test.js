import React from 'react'
import renderer from 'react-test-renderer'

import RepoPage from '../../src/pages/RepoPage'

describe('RepoPage', () => {
  it('RepoPage be able to render correctly', () => {
    const component = renderer.create(
      <RepoPage />
    )

    expect(component).toMatchSnapshot()
  })
})
