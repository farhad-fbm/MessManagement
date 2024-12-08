import { PropTypes } from 'prop-types';
import { AuthProvider } from './AuthContextProvider';
import { MealProvider } from './MealContextProvider';

export const ALLContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MealProvider>
        {children}
      </MealProvider>
    </AuthProvider>

  )
}
// ____________________
ALLContextProvider.propTypes = {
  children: PropTypes.element
}