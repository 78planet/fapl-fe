import instance from "./instance";

export const loginApi = async (email, password) => {
    return await instance.post('/api/auth/signin', {
        email,
        password,
    });
};
