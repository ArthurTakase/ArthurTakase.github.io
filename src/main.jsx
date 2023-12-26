import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'

import bigProject from './assets/bigProjects.json'

import List from './List.jsx'
import About from './About.jsx'
import Project from './components/Project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/game' element={<List type="game" />} />
            <Route path='/pro' element={<List type="pro" />} />
            <Route path='/perso' element={<List type="perso" />} />
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
)
