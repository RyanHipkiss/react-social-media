import { render, screen } from '@testing-library/react';
import Person from './person/Person';

test('generates person', () => {
  render( <Person name='Ryan' age='26'/>)
  expect(screen.getByText('Ryan')).toBeInTheDocument();
  expect(screen.getByText('26')).toBeInTheDocument();
})