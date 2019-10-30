import React from 'react'
import Layout from '../components/layout';
import TwitterHash from '../components/twitter_hash';

class TwitterPOC extends React.Component {
  render() {
    return (
      <Layout>
        <br></br>
        <TwitterHash />
      </Layout>
    )
  }
}
export default TwitterPOC