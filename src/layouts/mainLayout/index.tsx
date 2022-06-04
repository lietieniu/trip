import * as React from 'react';
import './index.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

interface IMainLayoutProps {
    children: any
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
    let { children } = props;
    return (
        <div className='App'>
            {/* 1.头部Header */}
            <Header />

            <div className='page-content'>
                {children}
            </div>

            {/* 3.Footer底部 */}
            <Footer />
        </div>
    );
};

export default MainLayout;
