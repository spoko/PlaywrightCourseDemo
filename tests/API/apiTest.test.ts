import { test } from '@playwright/test';

test('API demo test', async ({request}) => {
    //https://jsonplaceholder.typicode.com/todos/1
    const resp = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    const jsonResult = await resp.json();
    console.log(jsonResult);
})