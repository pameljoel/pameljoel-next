export function getData(data) {
  return new Promise((resolve, reject) => {
    resolve(data);
    reject('errore');
  });
}
export async function getDataAsync(data) {
  return data;
}

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://www.pameljoel.com';
