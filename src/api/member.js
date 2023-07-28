import instance from "./instance";

export const signupApi = async (email, nickName, password) => {
    return await instance.post('/api/members/signup', {
        email,
        nickName,
        password,
    });
};