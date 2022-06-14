import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomRouter from '../utils/CustomRouter';
import history from '../utils/history';
import MainLayaout from '../utils/MainLayout';
import { Login, Signup, Home, PlayList } from '../pages';
import ProtectedRoutes from '../utils/ProtectedRoutes';

const AppRouter = () => {
    return (
        <>
            <CustomRouter history={history}>
                <Routes>
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/signup" element={ <Signup /> } />
                    <Route element={ <ProtectedRoutes /> }>
                        <Route element={ <MainLayaout />} >
                            <Route path="/" element={ <Home /> } />
                            <Route path="/playlist" element={ <PlayList /> } />
                        </Route>
                    </Route>
                </Routes>
            </CustomRouter>
        </>
    );
};

export default AppRouter;