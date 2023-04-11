import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();
    const timeout = 3600;

    useEffect(() => {
        if (!token) return;

        setTimeout(() => {
            submit(null, { method: "post", action: "/logout" });
        }, 1 * 60 * 60 * 1000);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
