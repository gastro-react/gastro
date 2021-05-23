import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';
import MainView from './MainView';
import Sidebar from './Sidebar';
import { HOME_PAGE_UNLOADED } from '../../utils/constants/actionTypes';
import { loadHomePage } from '../../services/actions/loadHomePage';

const HomePage = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;
const MainContainer = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`
const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`
const Home = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.common);

  useEffect(() => {
    dispatch(loadHomePage(token));
    return () => dispatch({ type: HOME_PAGE_UNLOADED });
  }, [token])

    return (
      <HomePage>
        <Banner />
        <MainContainer>
          <FlexRow>
            <MainView />
            <Sidebar />
          </FlexRow>
        </MainContainer>
      </HomePage>
    );
  
}

export default Home;
