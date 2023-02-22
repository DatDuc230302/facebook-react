import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import MainLayout from './layouts/mainLayout';

function App() {
    return (
        <BrowserRouter>
            <div style={{ backgroundColor: '#181912a' }} className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = MainLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
