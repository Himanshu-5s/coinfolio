import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies } from '../components';
import { News } from '../components';



const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalInfo = data?.data?.stats;
 
  if (isFetching ) return 'Loading...';


  return (
    <>
      <Title level={2} className='heading'>Cryptocurrency Global Statistics</Title>
      <Row>
        
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalInfo.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalInfo.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalInfo.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24th Volume' value={millify(globalInfo.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalInfo.totalMarkets)} /></Col>
        
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the World</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies
        simplified
       />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest News on Crypto</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News
        simplified
       />
    </>
  )
}

export default Homepage;