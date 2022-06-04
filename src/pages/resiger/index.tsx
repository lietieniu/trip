import * as React from 'react';
import UserLayout from '../../layouts/userLayout';
import ResigerForm from './resigerForm'
interface IResigerProps {
}

const Resiger: React.FunctionComponent<IResigerProps> = (props) => {
    return (
      <UserLayout>
           <ResigerForm/>
      </UserLayout>
    );
};

export default Resiger;
