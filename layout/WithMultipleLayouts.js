import React from 'react';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
import GuestLayout from './GuestLayout';
const WithMultipleLayouts = (WrappedComponent) => {
    const HOC = (props) => {
        let layout;
        if (props.user && props.user.role === 'admin') {
            layout = (
                <AdminLayout>
                    <WrappedComponent {...props} />
                </AdminLayout>
            );
        } else if (props.user && props.user.role === 'user') {
            layout = (
                <UserLayout>
                    <WrappedComponent {...props} />
                </UserLayout>
            );
        } else {
            layout = (
                <GuestLayout>
                    <WrappedComponent {...props} />
                </GuestLayout>
            );
        }
        return layout;
    };

    return HOC;
};

export default WithMultipleLayouts;
