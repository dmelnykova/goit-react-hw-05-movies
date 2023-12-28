import { MutatingDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled'

export const Loader = () => {
  return (
    <StyledLoader>
    <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#ADD8E6"
        secondaryColor="#ADD8E6"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
    </StyledLoader>
  );
};