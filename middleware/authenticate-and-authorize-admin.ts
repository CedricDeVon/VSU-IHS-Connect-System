import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
      const jsonWebToken: any = window.localStorage!.getItem('userAuthToken');
      if (jsonWebToken === undefined || jsonWebToken === null) {
        console.log('JWT Not Found');
        return navigateTo('/auth/login');
      }

      let result: any = await $fetch('/api/auth/jsonWebToken/verify', {
        method: 'POST', body: { jsonWebToken }
      })
      if (result.isNotSuccessful) {
        throw new Error(result.message);
      }
    
      const { role, email, password } = result.data.data;

      if (role !== 'admin') {
        console.log('User is not an admin');
        return navigateTo('/auth/login');
      }

      await signInWithEmailAndPassword(getAuth(), email, password);
      
    } catch (error: any) {
      console.log(error);
      return navigateTo('/auth/login');
    }
  });