import React from 'react'
import CatalogueFeed from '../Cataloguecont/Content/CatalogueFeed'
import Sidebar from '../Cataloguecont/Content/Sidebar'
import '../CssPage/Catalogue.css'

function Catalogue() {
  return (
    <div className="catalogue-main">
      <div className="catalogue-sidebar">
        <Sidebar />
      </div>
      <div className="catalogue-feed">
        <CatalogueFeed/>
      </div>
    </div>
  )
}

export default Catalogue