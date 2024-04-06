// Importa a Biblioteca Yup para manipular os nomes dos ID's de cada Input
import * as Yup from 'yup';

export const Validar = Yup.object().shape({
    nome: Yup.string().required("*Preencher o campo obrigatório NOME!*"),
    email: Yup.string().email().required("*Preencher o campo obrigatório E-MAIL!*"),
    ass: Yup.string().required("*Preencher o campo obrigatório ASSUNTO!*"),
    msg: Yup.string().required("*Preencher o campo obrigatório MENSAGEM!*"),
})