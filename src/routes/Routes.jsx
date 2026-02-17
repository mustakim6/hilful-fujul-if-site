import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import Home from '../pages/home/Home';
import Fund from '../pages/fund/Fund';
import Education from '../pages/education/Education';
import Members from '../pages/members/Members';
import NextAim from '../pages/nextaim/NextAim';
import ContactUs from '../pages/contactus/ContactUs';



const routers = [

    // main layout routing start here
{
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: '/',
            element:<Home></Home> ,
        },
        {
            path:'/fund',
            element:<Fund></Fund> ,
        },
        {
            path: '/education' ,
            element: <Education></Education>,
        },
        {
            path: '/members' ,
            element: <Members></Members>,
        },
        {
            path: '/nextaim' ,
            element: <NextAim></NextAim>,
        },
        {
            path: '/contactus' ,
            element: <ContactUs></ContactUs>,
        },
    ]
},
// main layout routing end here

]


const Routes = createBrowserRouter(routers)

export default Routes; 