import { PropTypes } from 'prop-types';
import { AuthProvider } from './AuthContextProvider';

export const ALLContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>

  )
}
// ____________________
ALLContextProvider.propTypes = {
  children: PropTypes.element
}