import * as React from 'react';
import UserLayout from '../../layouts/userLayout';
import SignForm from './signForm'

interface ISignProps {
}

const Sign: React.FunctionComponent<ISignProps> = (props) => {
    return (
        <UserLayout>
            <SignForm/>
        </UserLayout>
    );
};

export default Sign;
