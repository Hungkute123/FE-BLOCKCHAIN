import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { ReactNode, useEffect } from 'react'
import BlankLayout from '../components/Layouts/BlankLayout'
import Router from 'next/router'
 function Home({ allPostsData }) {
  useEffect(()=>{
    Router.push('/wallet/create')
  })
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>NGUYỄN ĐÌNH HÙNG</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Home