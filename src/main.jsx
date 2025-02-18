import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'

import bigProject from './assets/bigProjects.json'

import List from './List.jsx'
import About from './About.jsx'
import Project from './components/Project.jsx'
import Shape from './components/Shape.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Shape shapeClass="shape__1" colorClass="color__1" positionClass="position__1" />
    <Shape shapeClass="shape__2" colorClass="color__2" positionClass="position__2" />
    <Shape shapeClass="shape__3" colorClass="color__3" positionClass="position__3" />
    <HashRouter>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/archive' element={<List type="archive" />} />
            <Route path='/fav' element={<List type="fav" />} />
            {
                bigProject.map(project => (
                    <Route
                        key={project.current}
                        path={`/${project.path}`}
                        element={<Project project={project} />} />
                ))
            }
        </Routes>
    </HashRouter>
    </>
)
