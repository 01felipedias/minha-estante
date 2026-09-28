import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const caminhoArquivo = path.join(__dirname, "..", "livros.json");

export function carregaLivros() {
  try {
    const dados = fs.readFileSync(caminhoArquivo, "utf-8");
    const livros = JSON.parse(dados);
    return Array.isArray(livros) ? livros : [];
  } catch (erro) {
    console.error("Não foi possível carregar os livros:", erro.message);
    return [];
  }
}

export function salvarLivros(livros) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(livros, null, 2), "utf-8");
}

export function adicionarLivro(novoLivro) {
  const livros = carregaLivros();
  livros.push(novoLivro);
  salvarLivros(livros);
}

export function alterarStatus(indice) {
  const livros = carregaLivros();

  if (!Number.isInteger(indice) || indice < 0 || indice >= livros.length) {
    return false;
  }

  livros[indice].status = livros[indice].status === "Lido" ? "Lendo" : "Lido";
  salvarLivros(livros);
  return true;
}

export function removerLivro(indice) {
  const livros = carregaLivros();

  if (!Number.isInteger(indice) || indice < 0 || indice >= livros.length) {
    return false;
  }

  livros.splice(indice, 1);
  salvarLivros(livros);
  return true;
}
