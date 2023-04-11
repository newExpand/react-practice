import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request, params }) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    if (mode !== "login" && mode !== "signup") {
        throw json({ message: "지원하지 않는 모드입니다." }, { status: 422 });
    }

    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    const response = await fetch("http://localhost:8080/" + mode, {
        method: request.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) throw json({ message: "사용자을 인증할 수 없습니다." }, { status: 500 });

    return redirect("/");
};
