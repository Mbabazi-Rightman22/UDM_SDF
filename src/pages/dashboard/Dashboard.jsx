import React from 'react'
import Layout from '../../Layout'

const Dashboard = () => {
  return (
	<Layout>
			<div className=" mb-2 ">
        <div
          style={{ height: "90vh" }}
          className='col-span-1 overflow-scroll h-full'>
          <iframe
            title="Dashboard"
            width="100%"
            height="100%"
            allowFullScreen
            src={`https://infrastructure.space.gov.rw/portal/apps/dashboards/1196ddb9d0c442398fd871b1b5f804c1`}
          ></iframe>
        </div>
		</div>
	</Layout>
  )
}

export default Dashboard