import { PropTypes } from 'prop-types';
import { TodosContextProvider } from './TodosContextProvider';
import { AuthContextProvider } from './AuthContexProvider';



export const ALLContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <TodosContextProvider>
        {children}
      </TodosContextProvider>
    </AuthContextProvider>

  )
}
// ____________________
ALLContextProvider.propTypes = {
  children: PropTypes.element
}