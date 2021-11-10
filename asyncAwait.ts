// exercicio 1

function dobrarEm5Segundos(x: number): Promise<number> {
   return new Promise((resolve, _) => {
      setTimeout(() => {
         return resolve(2 * x);
      }, 5000);
   });
}

async function somaAsync(x: number): Promise<number> {
   let a: number, b: number, c: number;
   a = await dobrarEm5Segundos(10);
   b = await dobrarEm5Segundos(20);
   c = await dobrarEm5Segundos(30);
   let soma = a + b + c + x;
   return new Promise((resolve, reject) => {
      return resolve(soma);
   });
}

somaAsync(10).then((numb) => console.log(numb));

// exercicio 2.1

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
async function umPorSegundo() {
   await delay();
   console.log('1s');
   await delay();
   console.log('2s');
   await delay();
   console.log('3s');
}
umPorSegundo();

// exercicio 2.2

import axios from 'axios';
async function getUserFromGithub(user: string) {
   try {
      let userData = await axios.get(`https://api.github.com/users/${user}`);
      console.log(userData.data);
   } catch (err) {
      console.log('Usuário não existe');
   }
}
getUserFromGithub('djunior97');
getUserFromGithub('djunioriqdivqv97');

// exercicio 2.3

class Github {
   static async getRepositories(repo: string) {
      try {
         let rep = await axios.get(`https://api.github.com/repos/${repo}`);
         console.log(rep.data);
      } catch (err) {
         console.log('Repositório não existe');
      }
   }
}
Github.getRepositories('marcelo-growdev/scrapbook-es6');
Github.getRepositories('marcelo-growdev/qdbqqbqwn');

// exercicio 2.4

const buscaUsuario = async (usuario: string) => {
   try {
      let userData = await axios.get(`https://api.github.com/users/${usuario}`);
      console.log(userData.data);
   } catch (err) {
      console.log('Usuário não existe');
   }
};
buscaUsuario('marcelo-growdev');
