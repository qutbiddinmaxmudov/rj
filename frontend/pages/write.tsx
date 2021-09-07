import { NextPage } from 'next'
import React from 'react'
import WriteForm from '../components/WriteForm'
import { MainLayout } from '../layouts/MainLayout'

interface WritePageProps {}

const WritePage: NextPage = () => {
  return (
    <MainLayout hideComments hideMenu className="main-layout-white">
      <WriteForm />
    </MainLayout>
  )
}

export default WritePage
