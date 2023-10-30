import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NewsIndex from './NewsIndex';
import AddNews from './NewsCrud/AddNews';
import NewsCrudHome from './NewsCrud/NewsCrudIndex';
import EditNews from './NewsCrud/NewsUpdate/NewsUpdateForm';

const newsApp = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<NewsIndex />} />
            <Route path="/addNews" element={<AddNews />} />
            <Route path="/newsCrud" element={<NewsCrudHome />} />
            <Route path='/updateNews' element={EditNews}></Route>
        </Routes>
    </div>
  )
}

export default newsApp