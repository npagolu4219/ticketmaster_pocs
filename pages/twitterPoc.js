import React from 'react'
import Layout from '../components/layout';
import TwitterHashDetails from '../components/hashtwitterData';
class TwitterPOC extends React.Component {
  render() {
    return (
      <Layout>
        <br></br>
        <TwitterHashDetails />
      </Layout>
    )
  }
}
export default TwitterPOC