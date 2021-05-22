import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Banner from './Banner';
import MainView from './MainView';
import Sidebar from './Sidebar';
import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

const HomePage = styled.main`
  max-width: 1440px;
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

  const onClickTag = (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload })

  useEffect(() => {
    const tab = token ? 'feed' : 'all';
    const articlesPromise = token 
      ? agent.Articles.feed
      : agent.Articles.all;

    Promise.all([agent.Tags.getAll(), articlesPromise()])
    .then(res => dispatch({ 
      type: HOME_PAGE_LOADED,
      tab,
      pager: articlesPromise,
      payload: res
    }))
    .catch(e => console.log(e))
    
    return () => dispatch({ type: HOME_PAGE_UNLOADED })
  }, [])

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
